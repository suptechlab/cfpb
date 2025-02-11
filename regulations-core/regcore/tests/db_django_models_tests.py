from datetime import date

from django.test import TestCase, TransactionTestCase

from regcore.db.django_models import *
from regcore.models import Diff, Layer, Notice, Regulation


class ReusableDMRegulations(object):
    def test_get_404(self):
        self.assertEqual(None, self.dmr.get('lablab', 'verver'))

    def test_get_success(self):
        model = Regulation(version='verver', label_string='a-b', text='ttt',
                           node_type='tyty', children=[]).save()
        self.assertEqual({'text': 'ttt',
                          'label': ['a', 'b'],
                          'marker': '',
                          'children': [],
                          'node_type': 'tyty'}, self.dmr.get('a-b', 'verver'))

    def test_listing(self):
        Regulation(version='ver1', label_string='a-b', text='textex',
                   node_type='ty', children=[]).save()
        Regulation(version='aaa', label_string='a-b', text='textex',
                   node_type='ty', children=[]).save()
        Regulation(version='333', label_string='a-b', text='textex',
                   node_type='ty', children=[]).save()
        Regulation(version='four', label_string='a-b', text='textex',
                   node_type='ty', children=[]).save()

        results = self.dmr.listing('a-b')
        self.assertEqual([('333', 'a-b'), ('aaa', 'a-b'), ('four', 'a-b'),
                          ('ver1', 'a-b')], results)

        Regulation(version='ver1', label_string='1111', text='aaaa',
                   node_type='ty', root=True, children=[]).save()
        Regulation(version='ver2', label_string='1111', text='bbbb',
                   node_type='ty', root=True, children=[]).save()
        Regulation(version='ver3', label_string='1111', text='cccc',
                   node_type='ty', root=False, children=[]).save()

        results = self.dmr.listing()
        self.assertEqual([('ver1', '1111'), ('ver2', '1111')], results)


class DMRegulationsTest(TransactionTestCase, ReusableDMRegulations):
    def setUp(self):
        Regulation.objects.all().delete()
        self.dmr = DMRegulations()

    def test_bulk_put(self):
        n2 = {'text': 'some text', 'label': ['111', '2'], 'children': [],
              'node_type': 'tyty'}
        n3 = {'text': 'other', 'label': ['111', '3'], 'children': [],
              'node_type': 'tyty2'}
        # Use a copy of the children
        root = {'text': 'root', 'label': ['111'], 'node_type': 'tyty3',
                'children': [dict(n2), dict(n3)]}
        nodes = [root, n2, n3]
        self.dmr.bulk_put(nodes, 'verver', '111')

        regs = Regulation.objects.all().order_by('text')

        self.assertEqual(3, len(regs))

        self.assertEqual('verver', regs[0].version)
        self.assertEqual('111-3', regs[0].label_string)
        self.assertEqual('other', regs[0].text)
        self.assertEqual('', regs[0].title)
        self.assertEqual('tyty2', regs[0].node_type)
        self.assertEqual([], regs[0].children)
        self.assertFalse(regs[0].root)

        self.assertEqual('verver', regs[1].version)
        self.assertEqual('111', regs[1].label_string)
        self.assertEqual('root', regs[1].text)
        self.assertEqual('', regs[1].title)
        self.assertEqual('tyty3', regs[1].node_type)
        self.assertEqual(2, len(regs[1].children))
        self.assertTrue(regs[1].root)

        self.assertEqual('verver', regs[2].version)
        self.assertEqual('111-2', regs[2].label_string)
        self.assertEqual('some text', regs[2].text)
        self.assertEqual('', regs[2].title)
        self.assertEqual('tyty', regs[2].node_type)
        self.assertEqual([], regs[2].children)
        self.assertFalse(regs[2].root)

    def test_bulk_put_overwrite(self):
        nodes = [{'text': 'other', 'label': ['111', '3'], 'children': [],
                  'node_type': 'tyty1'}]
        self.dmr.bulk_put(nodes, 'verver', '111-3')

        regs = Regulation.objects.all()
        self.assertEqual(1, len(regs))
        self.assertEqual('tyty1', regs[0].node_type)

        nodes[0]['node_type'] = 'tyty2'

        self.dmr.bulk_put(nodes, 'verver', '111-3')

        regs = Regulation.objects.all()
        self.assertEqual(1, len(regs))
        self.assertEqual('tyty2', regs[0].node_type)


class ReusableDMLayers(object):
    def test_get_404(self):
        self.assertEqual(None, self.dml.get('namnam', 'lablab', 'verver'))

    def test_get_success(self):
        Layer(version='verver', name='namnam', label='lablab',
              layer={"some": "body"}).save()

        self.assertEqual({"some": 'body'},
                         self.dml.get('namnam', 'lablab', 'verver'))


class DMLayersTest(TestCase, ReusableDMLayers):
    def setUp(self):
        Layer.objects.all().delete()
        self.dml = DMLayers()

    def test_bulk_put(self):
        layers = [
            {'111-22': [], '111-22-a': [], 'label': '111-22'},
            {'111-23': [], 'label': '111-23'}]
        self.dml.bulk_put(layers, 'verver', 'name', '111')

        layers = Layer.objects.all().order_by('label')
        self.assertEqual(2, len(layers))

        self.assertEqual('verver', layers[0].version)
        self.assertEqual('name', layers[0].name)
        self.assertEqual('111-22', layers[0].label)
        self.assertEqual({'111-22': [], '111-22-a': []}, layers[0].layer)

        self.assertEqual('verver', layers[1].version)
        self.assertEqual('name', layers[1].name)
        self.assertEqual('111-23', layers[1].label)
        self.assertEqual({'111-23': []}, layers[1].layer)

    def test_bulk_put_overwrite(self):
        layers = [{'111-23': [], 'label': '111-23'}]
        self.dml.bulk_put(layers, 'verver', 'name', '111-23')

        layers = Layer.objects.all()
        self.assertEqual(1, len(layers))
        self.assertEqual({'111-23': []}, layers[0].layer)

        layers = [{'111-23': [1], 'label': '111-23'}]
        self.dml.bulk_put(layers, 'verver', 'name', '111-23')

        layers = Layer.objects.all()
        self.assertEqual(1, len(layers))
        self.assertEqual({'111-23': [1]}, layers[0].layer)


class ReusableDMNotices(object):
    def test_get_404(self):
        self.assertEqual(None, self.dmn.get('docdoc', '222'))

    def test_get_success(self):
        Notice(document_number='docdoc', cfr_part='111', fr_url='frfr',
               publication_date=date.today(),
               notice={"some": "body"}).save()
        self.assertEqual({"some": 'body'}, self.dmn.get(
            doc_number='docdoc', part='111'))

    def test_listing(self):
        n = Notice(document_number='22', cfr_part='876', fr_url='fr1', 
                   notice={}, effective_on=date(2005, 5, 5),
                   publication_date=date(2001, 3, 3))
        n.save()
        n = Notice(document_number='9', cfr_part='876', fr_url='fr2', 
                   notice={}, publication_date=date(1999, 1, 1))
        n.save()
        n = Notice(document_number='9', cfr_part='111', fr_url='fr2', 
                   notice={}, publication_date=date(1999, 1, 1))
        n.save()

        print self.dmn.listing()

        self.assertEqual([{'document_number': '22', 
                           'cfr_part': '876', 
                           'fr_url': 'fr1',
                           'publication_date': '2001-03-03',
                           'effective_on': '2005-05-05'},
                          {'document_number': '9', 
                           'cfr_part': '876',
                           'fr_url': 'fr2',
                           'publication_date': '1999-01-01'},
                          {'document_number': '9', 
                           'cfr_part': '111',
                           'fr_url': 'fr2',
                           'publication_date': '1999-01-01'}],
                         self.dmn.listing())

        # self.assertEqual(self.dmn.listing(), self.dmn.listing('876'))
        self.assertEqual([], self.dmn.listing('888'))


class DMNoticesTest(TestCase, ReusableDMNotices):
    def setUp(self):
        Notice.objects.all().delete()
        self.dmn = DMNotices()

    def test_put(self):
        """ Test that we can put a notice with an explicitly labeled 
            part """
        dmn = DMNotices()
        doc = {"some": "structure",
               'effective_on': '2011-01-01',
               'fr_url': 'http://example.com',
               'publication_date': '2010-02-02',
               'cfr_parts': ['111', '222']}

        # Put the notice with the explicit part label 222
        dmn.put('docdoc', '222', doc)

        # Check that everything looks good.
        notices = Notice.objects.filter(
            document_number='docdoc', cfr_part='222')
        self.assertEqual(1, len(notices))
        self.assertEqual('docdoc', notices[0].document_number)
        self.assertEqual(date(2011, 1, 1), notices[0].effective_on)
        self.assertEqual('http://example.com', notices[0].fr_url)
        self.assertEqual(date(2010, 2, 2), notices[0].publication_date)

        # Try to put the same notice with the other part
        dmn.put('docdoc', '111', doc)

        # Now ensure we can get the notice for the part and verify
        # its info
        notices = Notice.objects.filter(
            document_number='docdoc', cfr_part='111')
        self.assertEqual('docdoc', notices[0].document_number)
        self.assertEqual(date(2011, 1, 1), notices[0].effective_on)
        self.assertEqual('http://example.com', notices[0].fr_url)
        self.assertEqual(date(2010, 2, 2), notices[0].publication_date)

        # First ensure there are two notices with that doc number.
        notices = Notice.objects.filter(document_number='docdoc')
        self.assertEqual(2, len(notices))

    def test_put_overwrite(self):
        dmn = DMNotices()
        doc = {"some": "structure",
               'effective_on': '2011-01-01',
               'fr_url': 'http://example.com',
               'publication_date': '2010-02-02',
               'cfr_part': '222'}
        dmn.put('docdoc', '222', doc)

        notices = Notice.objects.all()
        self.assertEqual(1, len(notices))
        self.assertEqual('http://example.com', notices[0].fr_url)

        doc['fr_url'] = 'url2'
        dmn.put('docdoc', '222', doc)

        notices = Notice.objects.all()
        self.assertEqual(1, len(notices))
        self.assertEqual('url2', notices[0].fr_url)
        

class ReusableDMDiff(object):
    def test_get_404(self):
        self.assertEqual(None, self.dmd.get('lablab', 'oldold', 'newnew'))

    def test_get_success(self):
        Diff(label='lablab', old_version='oldold', new_version='newnew',
             diff={"some": "body"}).save()

        self.assertEqual({"some": 'body'},
                         self.dmd.get('lablab', 'oldold', 'newnew'))


class DMDiffTest(TestCase, ReusableDMDiff):
    def setUp(self):
        Diff.objects.all().delete()
        self.dmd = DMDiffs()

    def test_put(self):
        dmd = DMDiffs()
        dmd.put('lablab', 'oldold', 'newnew', {"some": "structure"})

        diffs = Diff.objects.all()
        self.assertEqual(1, len(diffs))

        self.assertEqual('lablab', diffs[0].label)
        self.assertEqual('oldold', diffs[0].old_version)
        self.assertEqual('newnew', diffs[0].new_version)
        self.assertEqual({'some': 'structure'}, diffs[0].diff)

    def test_put_overwrite(self):
        dmd = DMDiffs()
        dmd.put('lablab', 'oldold', 'newnew', {"some": "structure"})

        diffs = Diff.objects.all()
        self.assertEqual(1, len(diffs))
        self.assertEqual({'some': 'structure'}, diffs[0].diff)

        dmd.put('lablab', 'oldold', 'newnew', {"other": "structure"})
        diffs = Diff.objects.all()
        self.assertEqual(1, len(diffs))
        self.assertEqual({'other': 'structure'}, diffs[0].diff)
