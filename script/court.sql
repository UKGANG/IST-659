IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.court
	(
		court_id            BIGINT          NOT NULL,
		court_location_id   BIGINT          NOT NULL,
		court_name          NVARCHAR(255)   NOT NULL
	)

	PRINT 'CREATE TABLE dbo.court'

	ALTER TABLE dbo.[court]
	    ADD CONSTRAINT PK_court PRIMARY KEY CLUSTERED (court_id)

	PRINT 'CREATE primary key pk_court on table [dbo].[court]'
END
