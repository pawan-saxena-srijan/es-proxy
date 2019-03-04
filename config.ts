const Config = {
    ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
    ETL_URL:
      process.env.ETL_URL ||
      'http://test-url',
    OBJECT_ID_KEY:
        process.env.OBJECT_ID_KEY ||
        'fileName',
    AUTHORIZATION:
        process.env.AUTHORIZATION ||
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFUZzFRek5FUkVJNFJVVTBRVFV3TkRsRE16azVOamhETWpNMFJUQkROemRDTmpFMVFUWXlOZyJ9.eyJpc3MiOiJodHRwczovL29uY29ycHMtZGV2LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YjZhYjRkOGU1NDM1NTYxM2ZkM2QzYWQiLCJhdWQiOlsiaHR0cHM6Ly9iZXpqcDFydDNiLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2FscGhhIiwiaHR0cHM6Ly9vbmNvcnBzLWRldi5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTUxNjc2MDM3LCJleHAiOjE1NTE3NjI0MzcsImF6cCI6IkhnNzRyQWVweFVNMkVQVE0weEV6Mng5MUhHZGVSUEROIiwic2NvcGUiOiJvcGVuaWQifQ.2s_kfnKjN86TxydrdGyfqwgARiZ6yxVbxYeIdCV250ZzoFPIZB9y5TLN9DT62Zg9VQFhnba13X4Z26SU7CFjOlw3YpWs3xS1sxGKZhHPtLEMe9iqdlQA5RbBdIxB_-2dR9rCLxqyk3B4-wJJsWq6VPz2UbQD7GMUUhVMppFoQcK78h-v2cuvknfM2tRK73yfFY5sdT43QRJsJrfw4ko5b10cNochHX3XVtIMVeCwJeq1__W1Qpbe7gAnqGAN0PQXq-rJbdVbmbd16CrRJC-Rds70ngZSkbV0kqHNI-lGuTItOCh7pYJZKOLcIbZWrwwL-xJpnmqjSLpXazVfvAYxKA',
    ETL_S3_EVENT_URL:
        process.env.ETL_S3_EVENT_URL ||
        '/api/command/file',
}
export { Config };
