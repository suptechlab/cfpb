import groovy.transform.Field
@Field private First = null

def init(first) {
    First = first
}
def test1(){
    print "test 1 of groovy 2 fired"
}
def test2(){
    First.test2()
}
return this