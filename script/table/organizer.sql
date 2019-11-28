IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='organizer' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.organizer
	(
		organizer_id        BIGINT          NOT NULL IDENTITY,
		participant_id             BIGINT          NOT NULL,
		created_datetime    DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.organizer'

	ALTER TABLE dbo.[organizer]
		ADD CONSTRAINT PK_organizer PRIMARY KEY CLUSTERED (organizer_id)

	PRINT 'CREATE primary key pk_organizer on table [dbo].[organizer]'
END
