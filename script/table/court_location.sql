IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court_location' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.court_location
	(
		court_location_id	BIGINT          NOT NULL IDENTITY,
		court_location_name	NVARCHAR(255)   NOT NULL,
	)

	PRINT 'CREATE TABLE dbo.court_location'

	ALTER TABLE dbo.[court_location]
		ADD CONSTRAINT PK_court_location PRIMARY KEY CLUSTERED (court_location_id)

	PRINT 'CREATE primary key pk_court_location on table [dbo].[court_location]'
END
