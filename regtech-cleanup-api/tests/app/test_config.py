from regtech_cleanup_api.config import Filing_Settings, Institution_Settings


def test_filing_postgres_dsn_building():
    mock_config = {
        "db_name": "test",
        "db_user": "user",
        "db_pwd": "\\z9-/tgb76#@",
        "db_host": "test:5432",
        "db_scehma": "test",
    }
    settings = Filing_Settings(**mock_config)
    assert str(settings.conn) == "postgresql+asyncpg://user:%5Cz9-%2Ftgb76%23%40@test:5432/test"


def test_default_maxes():
    settings = Filing_Settings()
    assert settings.max_validation_errors == 1000000
    assert settings.max_json_records == 10000
    assert settings.max_json_group_size == 200


def test_default_server_configs():
    settings = Filing_Settings()
    assert settings.server_config.host == "0.0.0.0"
    assert settings.server_config.workers == 4
    assert settings.server_config.reload is False
    assert settings.server_config.time_out == 65
    assert settings.server_config.port == 8888


def test_institution_postgres_dsn_building():
    mock_config = {
        "inst_db_name": "test",
        "inst_db_user": "user",
        "inst_db_pwd": "\\z9-/tgb76#@",
        "inst_db_host": "test:5432",
        "inst_db_scehma": "test",
    }
    settings = Institution_Settings(**mock_config)
    assert str(settings.inst_conn) == "postgresql+asyncpg://user:%5Cz9-%2Ftgb76%23%40@test:5432/test"
