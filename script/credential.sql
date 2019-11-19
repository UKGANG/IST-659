IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='credential' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.credential
	(
		credential_id       BIGINT          NOT NULL,
		user_id             BIGINT          NOT NULL,
		password            NVARCHAR(255)   NOT NULL,
		activated_datetime  DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.credential'

	ALTER TABLE dbo.[credential]
	    ADD CONSTRAINT PK_credential PRIMARY KEY CLUSTERED (credential_id)

	PRINT 'CREATE primary key pk_credential on table [dbo].[credential]'
END
