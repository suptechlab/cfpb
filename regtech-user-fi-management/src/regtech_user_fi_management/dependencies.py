from http import HTTPStatus
from typing import Annotated
from fastapi import Depends, Request
from sqlalchemy.orm import Session

from regtech_user_fi_management.entities.engine.engine import get_session
import regtech_user_fi_management.entities.repos.institutions_repo as repo
from regtech_api_commons.api.exceptions import RegTechHttpException
from regtech_api_commons.api.dependencies import get_email_domain


def check_domain(request: Request, session: Annotated[Session, Depends(get_session)]) -> None:
    if not request.user.is_authenticated:
        raise RegTechHttpException(
            status_code=HTTPStatus.FORBIDDEN, name="Request Forbidden", detail="unauthenticated user"
        )
    if email_domain_denied(session, get_email_domain(request.user.email)):
        raise RegTechHttpException(
            status_code=HTTPStatus.FORBIDDEN, name="Request Forbidden", detail="email domain denied"
        )


def email_domain_denied(session: Session, email: str) -> bool:
    return not repo.is_domain_allowed(session, email)
