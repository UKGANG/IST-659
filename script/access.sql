IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='access' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.access
	(
		access_id           BIGINT          NOT NULL,
		page_name           NVARCHAR(255)   NOT NULL,
		is_enabled          BIT             NOT NULL
	)

	PRINT 'CREATE TABLE dbo.access'

	ALTER TABLE dbo.[access]
	    ADD CONSTRAINT PK_access PRIMARY KEY CLUSTERED (access_id)

	PRINT 'CREATE primary key pk_access on table [dbo].[access]'
END
