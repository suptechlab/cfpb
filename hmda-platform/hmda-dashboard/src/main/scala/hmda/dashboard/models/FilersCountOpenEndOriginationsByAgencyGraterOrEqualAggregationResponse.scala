package hmda.dashboard.models

import io.circe.{Decoder, Encoder, HCursor}

case class FilersCountOpenEndOriginationsByAgencyGraterOrEqualAggregationResponse(aggregations: Seq[FilersCountOpenEndOriginationsByAgencyGraterOrEqual])

object FilersCountOpenEndOriginationsByAgencyGraterOrEqualAggregationResponse {
  private object constants {
    val Results = "results"
  }

  implicit val encoder: Encoder[FilersCountOpenEndOriginationsByAgencyGraterOrEqualAggregationResponse] =
    Encoder.forProduct1(constants.Results)(aggR =>
      aggR.aggregations)

  implicit val decoder: Decoder[FilersCountOpenEndOriginationsByAgencyGraterOrEqualAggregationResponse] = (c: HCursor) =>
    for {
      a <- c.downField(constants.Results).as[Seq[FilersCountOpenEndOriginationsByAgencyGraterOrEqual]]
    } yield FilersCountOpenEndOriginationsByAgencyGraterOrEqualAggregationResponse(a)
}
