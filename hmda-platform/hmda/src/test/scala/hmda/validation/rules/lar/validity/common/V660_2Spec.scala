package hmda.validation.rules.lar.validity

import hmda.model.filing.lar.LarGenerators._
import hmda.model.filing.lar.LoanApplicationRegister
import hmda.model.filing.lar.enums._
import hmda.validation.rules.EditCheck
import hmda.validation.rules.lar.LarEditCheckSpec

class V660_2Spec extends LarEditCheckSpec {
  override def check: EditCheck[LoanApplicationRegister] = V660_2

  property("Credit score type must be valid") {
    forAll(larGen) { lar =>
      lar
        .copy(
          applicant =
             lar.applicant.copy(creditScoreType = OneOrMoreCreditScoreModels))
          .mustPass

      lar
        .copy(
          applicant =
            lar.applicant.copy(creditScoreType = CreditScoreNoCoApplicant))
        .mustFail
      
      lar
        .copy(
          applicant =
            lar.applicant.copy(creditScoreType = FICOScore9))
        .mustFail
    }
  }
}
