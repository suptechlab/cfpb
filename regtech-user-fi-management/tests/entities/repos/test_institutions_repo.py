import pytest
from pytest_mock import MockerFixture
from sqlalchemy.orm import Session

from regtech_user_fi_management.entities.models.dto import (
    FinancialInstitutionDto,
    FinancialInstitutionDomainCreate,
    SblTypeAssociationDto,
)
from regtech_user_fi_management.entities.models.dao import (
    FinancialInstitutionDomainDao,
    FinancialInstitutionDao,
    DeniedDomainDao,
    AddressStateDao,
    FederalRegulatorDao,
    HMDAInstitutionTypeDao,
    SBLInstitutionTypeDao,
    SblTypeMappingDao,
)
import regtech_user_fi_management.entities.repos.institutions_repo as repo
from regtech_api_commons.models.auth import AuthenticatedUser


class TestInstitutionsRepo:
    auth_user: AuthenticatedUser = AuthenticatedUser.from_claim({"id": "test_user_id"})

    @pytest.fixture(scope="function", autouse=True)
    def setup(
        self,
        transaction_session: Session,
    ):
        state_ga, state_ca, state_fl = (
            AddressStateDao(code="GA", name="Georgia"),
            AddressStateDao(code="CA", name="California"),
            AddressStateDao(code="FL", name="Florida"),
        )
        fr_dao_fri1, fr_dao_fri2, fr_dao_fri3 = (
            FederalRegulatorDao(id="FRI1", name="Test Federal Regulator ID 1"),
            FederalRegulatorDao(id="FRI2", name="Test Federal Regulator ID 2"),
            FederalRegulatorDao(id="FRI3", name="Test Federal Regulator ID 3"),
        )
        hmda_it_dao_hit1, hmda_it_dao_hit2, hmda_it_dao_hit3 = (
            HMDAInstitutionTypeDao(id="HIT1", name="Test HMDA Instituion ID 1"),
            HMDAInstitutionTypeDao(id="HIT2", name="Test HMDA Instituion ID 2"),
            HMDAInstitutionTypeDao(id="HIT3", name="Test HMDA Instituion ID 3"),
        )
        sbl_it_dao_sit1, sbl_it_dao_sit2, sbl_it_dao_sit3 = (
            SBLInstitutionTypeDao(id="1", name="Test SBL Instituion ID 1"),
            SBLInstitutionTypeDao(id="2", name="Test SBL Instituion ID 2"),
            SBLInstitutionTypeDao(id="13", name="Test SBL Instituion ID Other"),
        )
        fi_dao_123, fi_dao_456, fi_dao_sub_456 = (
            FinancialInstitutionDao(
                name="Test Bank 123",
                lei="TESTBANK123000000000",
                lei_status_code="ISSUED",
                domains=[FinancialInstitutionDomainDao(domain="test.bank.1", lei="TESTBANK123000000000")],
                tax_id="12-3456789",
                rssd_id=1234,
                primary_federal_regulator_id="FRI1",
                hmda_institution_type_id="HIT1",
                sbl_institution_types=[SblTypeMappingDao(sbl_type=sbl_it_dao_sit1, modified_by="test_user_id")],
                hq_address_street_1="Test Address Street 1",
                hq_address_street_2="",
                hq_address_street_3="",
                hq_address_street_4="",
                hq_address_city="Test City 1",
                hq_address_state_code="GA",
                hq_address_zip="00000",
                parent_lei="012PARENTTESTBANK123",
                parent_legal_name="PARENT TEST BANK 123",
                parent_rssd_id=12345,
                top_holder_lei="01234TOPHOLDERLEI123",
                top_holder_legal_name="TOP HOLDER LEI 123",
                top_holder_rssd_id=123456,
                modified_by="test_user_id",
            ),
            FinancialInstitutionDao(
                name="Test Bank 456",
                lei="TESTBANK456000000000",
                lei_status_code="ISSUED",
                domains=[FinancialInstitutionDomainDao(domain="test.bank.2", lei="TESTBANK456000000000")],
                tax_id="98-7654321",
                rssd_id=4321,
                primary_federal_regulator_id="FRI2",
                hmda_institution_type_id="HIT2",
                sbl_institution_types=[SblTypeMappingDao(sbl_type=sbl_it_dao_sit2, modified_by="test_user_id")],
                hq_address_street_1="Test Address Street 2",
                hq_address_street_2="",
                hq_address_street_3="",
                hq_address_street_4="",
                hq_address_city="Test City 2",
                hq_address_state_code="CA",
                hq_address_zip="11111",
                parent_lei="012PARENTTESTBANK456",
                parent_legal_name="PARENT TEST BANK 456",
                parent_rssd_id=54321,
                top_holder_lei="01234TOPHOLDERLEI456",
                top_holder_legal_name="TOP HOLDER LEI 456",
                top_holder_rssd_id=654321,
                modified_by="test_user_id",
            ),
            FinancialInstitutionDao(
                name="Test Sub Bank 456",
                lei="TESTSUBBANK456000000",
                lei_status_code="ISSUED",
                domains=[FinancialInstitutionDomainDao(domain="sub.test.bank.2", lei="TESTSUBBANK456000000")],
                tax_id="76-5432198",
                rssd_id=2134,
                primary_federal_regulator_id="FRI3",
                hmda_institution_type_id="HIT3",
                sbl_institution_types=[
                    SblTypeMappingDao(sbl_type=sbl_it_dao_sit3, modified_by="test_user_id", details="test")
                ],
                hq_address_street_1="Test Address Street 3",
                hq_address_street_2="",
                hq_address_street_3="",
                hq_address_street_4="",
                hq_address_city="Test City 3",
                hq_address_state_code="FL",
                hq_address_zip="11111",
                parent_lei="012PARENTTESTBANK456",
                parent_legal_name="PARENT TEST SUB BANK 456",
                parent_rssd_id=21435,
                top_holder_lei="01234TOPHOLDERLEI456",
                top_holder_legal_name="TOP HOLDER LEI SUB BANK 456",
                top_holder_rssd_id=321654,
                modified_by="test_user_id",
            ),
        )

        transaction_session.add(state_ga)
        transaction_session.add(state_ca)
        transaction_session.add(state_fl)

        transaction_session.add(fr_dao_fri1)
        transaction_session.add(fr_dao_fri2)
        transaction_session.add(fr_dao_fri3)

        transaction_session.add(hmda_it_dao_hit1)
        transaction_session.add(hmda_it_dao_hit2)
        transaction_session.add(hmda_it_dao_hit3)

        transaction_session.add(sbl_it_dao_sit1)
        transaction_session.add(sbl_it_dao_sit2)
        transaction_session.add(sbl_it_dao_sit3)

        transaction_session.add(fi_dao_123)
        transaction_session.add(fi_dao_456)
        transaction_session.add(fi_dao_sub_456)
        transaction_session.commit()

    def test_get_sbl_types(self, query_session: Session):
        expected_ids = {"1", "2", "13"}
        res = repo.get_sbl_types(query_session)
        assert len(res) == 3
        assert set([r.id for r in res]) == expected_ids

    def test_get_hmda_types(self, query_session: Session):
        expected_ids = {"HIT1", "HIT2", "HIT3"}
        res = repo.get_hmda_types(query_session)
        assert len(res) == 3
        assert set([r.id for r in res]) == expected_ids

    def test_get_address_states(self, query_session: Session):
        expected_codes = {"CA", "GA", "FL"}
        res = repo.get_address_states(query_session)
        assert len(res) == 3
        assert set([r.code for r in res]) == expected_codes

    def test_get_federal_regulators(self, query_session: Session):
        expected_ids = {"FRI1", "FRI2", "FRI3"}
        res = repo.get_federal_regulators(query_session)
        assert len(res) == 3
        assert set([r.id for r in res]) == expected_ids

    def test_get_institutions(self, query_session: Session):
        res = repo.get_institutions(query_session)
        assert len(res) == 3

    def test_get_institutions_by_domain(self, query_session: Session):
        # verify 'generic' domain queries don't work
        res = repo.get_institutions(query_session, domain="bank")
        assert len(res) == 0

        res = repo.get_institutions(query_session, domain="test.bank.1")
        assert len(res) == 1

        # shouldn't find sub.test.bank.2
        res = repo.get_institutions(query_session, domain="test.bank.2")
        assert len(res) == 1

        res = repo.get_institutions(query_session, domain="sub.test.bank.2")
        assert len(res) == 1

    def test_get_institutions_by_domain_not_existing(self, query_session: Session):
        res = repo.get_institutions(query_session, domain="testing.bank")
        assert len(res) == 0

    def test_get_institutions_by_lei_list(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK123000000000", "TESTBANK456000000000"])
        assert len(res) == 2

    def test_get_institutions_by_lei_list_item_not_existing(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["0123NOTTESTBANK01234"])
        assert len(res) == 0

    def test_empty_state(self, transaction_session: Session):
        db_fi = repo.upsert_institution(
            transaction_session,
            FinancialInstitutionDto(
                name="New Bank 123",
                lei="NEWBANK1230000000000",
                lei_status_code="ISSUED",
                tax_id="65-4321987",
                rssd_id=6543,
                primary_federal_regulator_id="FRI3",
                hmda_institution_type_id="HIT3",
                sbl_institution_types=[SblTypeAssociationDto(id="1")],
                hq_address_street_1="Test Address Street 3",
                hq_address_street_2="",
                hq_address_street_3="",
                hq_address_street_4="",
                hq_address_city="Test City 3",
                hq_address_state_code="",
                hq_address_zip="22222",
                parent_lei="0123PARENTNEWBANK123",
                parent_legal_name="PARENT NEW BANK 123",
                parent_rssd_id=76543,
                top_holder_lei="TOPHOLDNEWBANKLEI123",
                top_holder_legal_name="TOP HOLDER NEW BANK LEI 123",
                top_holder_rssd_id=876543,
                modified_by="test_user_id",
            ),
            self.auth_user,
        )
        assert db_fi.domains == []
        res = repo.get_institutions(transaction_session)
        assert len(res) == 4
        new_sbl_types = next(iter([fi for fi in res if fi.lei == "NEWBANK1230000000000"])).sbl_institution_types
        assert len(new_sbl_types) == 1
        assert next(iter(new_sbl_types)).sbl_type.name == "Test SBL Instituion ID 1"

    def test_add_institution(self, transaction_session: Session):
        db_fi = repo.upsert_institution(
            transaction_session,
            FinancialInstitutionDto(
                name="New Bank 123",
                lei="NEWBANK1230000000000",
                lei_status_code="ISSUED",
                tax_id="65-4321987",
                rssd_id=6543,
                primary_federal_regulator_id="FRI3",
                hmda_institution_type_id="HIT3",
                sbl_institution_types=[SblTypeAssociationDto(id="1")],
                hq_address_street_1="Test Address Street 3",
                hq_address_street_2="",
                hq_address_street_3="",
                hq_address_street_4="",
                hq_address_city="Test City 3",
                hq_address_state_code="FL",
                hq_address_zip="22222",
                parent_lei="0123PARENTNEWBANK123",
                parent_legal_name="PARENT NEW BANK 123",
                parent_rssd_id=76543,
                top_holder_lei="TOPHOLDNEWBANKLEI123",
                top_holder_legal_name="TOP HOLDER NEW BANK LEI 123",
                top_holder_rssd_id=876543,
                modified_by="test_user_id",
            ),
            self.auth_user,
        )
        assert db_fi.domains == []
        res = repo.get_institutions(transaction_session)
        assert len(res) == 4
        new_sbl_types = next(iter([fi for fi in res if fi.lei == "NEWBANK1230000000000"])).sbl_institution_types
        assert len(new_sbl_types) == 1
        assert next(iter(new_sbl_types)).sbl_type.name == "Test SBL Instituion ID 1"

    def test_add_institution_only_required_fields(self, transaction_session: Session, query_session: Session):
        repo.upsert_institution(
            transaction_session,
            FinancialInstitutionDto(
                name="Minimal Bank 123",
                lei="MINBANK1230000000000",
                lei_status_code="ISSUED",
                hq_address_street_1="Minimal Address Street 1",
                hq_address_city="Minimal City 1",
                hq_address_state_code="FL",
                hq_address_zip="22222",
            ),
            self.auth_user,
        )
        res = repo.get_institution(query_session, "MINBANK1230000000000")
        assert res is not None
        assert res.tax_id is None

    def test_add_institution_missing_required_fields(self, transaction_session: Session, query_session: Session):
        with pytest.raises(Exception) as e:
            repo.upsert_institution(
                transaction_session,
                FinancialInstitutionDto(
                    name="Minimal Bank 123",
                    lei="MINBANK1230000000000",
                ),
                self.auth_user,
            )
        assert "field required" in str(e.value).lower()
        res = repo.get_institution(query_session, "MINBANK1230000000000")
        assert res is None

    def test_update_institution(self, transaction_session: Session):
        repo.upsert_institution(
            transaction_session,
            FinancialInstitutionDto(
                name="Test Bank 234",
                lei="TESTBANK123000000000",
                lei_status_code="ISSUED",
                hq_address_street_1="Test Address Street 1",
                hq_address_city="Test City 1",
                hq_address_state_code="GA",
                hq_address_zip="00000",
            ),
            self.auth_user,
        )
        res = repo.get_institutions(transaction_session)
        assert len(res) == 3
        assert res[0].name == "Test Bank 234"

    def test_add_domains(self, transaction_session: Session, query_session: Session):
        repo.add_domains(
            transaction_session,
            "TESTBANK123000000000",
            [FinancialInstitutionDomainCreate(domain="bank.test")],
        )
        transaction_session.expunge_all()
        fi = repo.get_institution(query_session, "TESTBANK123000000000")
        assert len(fi.domains) == 2

    def test_domain_allowed(self, transaction_session: Session):
        denied_domain = DeniedDomainDao(domain="yahoo.com")
        transaction_session.add(denied_domain)
        transaction_session.commit()
        assert repo.is_domain_allowed(transaction_session, "yahoo.com") is False
        assert repo.is_domain_allowed(transaction_session, "gmail.com") is True
        assert repo.is_domain_allowed(transaction_session, "") is False

    def test_institution_mapped_to_state_valid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK123000000000"])
        assert res[0].hq_address_state.name == "Georgia"

    def test_institution_mapped_to_state_invalid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK456000000000"])
        assert res[0].hq_address_state.name != "Georgia"

    def test_institution_mapped_to_federal_regulator_valid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK456000000000"])
        assert res[0].primary_federal_regulator.name != "Test Federal Regulator ID 1"

    def test_institution_mapped_to_federal_regulator_invalid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK123000000000"])
        assert res[0].primary_federal_regulator.name == "Test Federal Regulator ID 1"

    def test_institution_mapped_to_hmda_it_valid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK123000000000"])
        assert res[0].hmda_institution_type.name == "Test HMDA Instituion ID 1"

    def test_institution_mapped_to_hmda_it_invalid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK456000000000"])
        assert res[0].hmda_institution_type.name != "Test HMDA Instituion ID 1"

    def test_institution_mapped_to_sbl_it_valid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK123000000000"])
        assert res[0].sbl_institution_types[0].sbl_type.name == "Test SBL Instituion ID 1"

    def test_institution_mapped_to_sbl_it_invalid(self, query_session: Session):
        res = repo.get_institutions(query_session, leis=["TESTBANK456000000000"])
        assert res[0].sbl_institution_types[0].sbl_type.name != "Test SBL Instituion ID 1"

    def test_update_sbl_institution_types(
        self, mocker: MockerFixture, query_session: Session, transaction_session: Session
    ):
        test_lei = "TESTBANK123000000000"
        existing_inst = repo.get_institution(query_session, test_lei)
        query_session.expunge(existing_inst)
        sbl_types = [
            SblTypeAssociationDto(id="1"),
            SblTypeAssociationDto(id="2"),
            SblTypeAssociationDto(id="13", details="test"),
        ]
        commit_spy = mocker.patch.object(transaction_session, "commit", wraps=transaction_session.commit)
        updated_inst = repo.update_sbl_types(transaction_session, self.auth_user, test_lei, sbl_types)
        commit_spy.assert_called_once()
        assert len(existing_inst.sbl_institution_types) == 1
        assert len(updated_inst.sbl_institution_types) == 3
        diffs = set(updated_inst.sbl_institution_types).difference(set(existing_inst.sbl_institution_types))
        assert len(diffs) == 2

    def test_update_sbl_institution_types_inst_non_exist(self, mocker: MockerFixture, transaction_session: Session):
        test_lei = "NONEXISTINGBANK00000"
        sbl_types = [
            SblTypeAssociationDto(id="1"),
            SblTypeAssociationDto(id="2"),
            SblTypeAssociationDto(id="13", details="test"),
        ]
        commit_spy = mocker.patch.object(transaction_session, "commit", wraps=transaction_session.commit)
        res = repo.update_sbl_types(transaction_session, self.auth_user, test_lei, sbl_types)
        commit_spy.assert_not_called()
        assert res is None
