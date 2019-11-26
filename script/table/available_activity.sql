IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='available_activity' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.available_activity
	(
		court_id            BIGINT          NOT NULL,
		activity_type_id    SMALLINT        NOT NULL,
		created_datetime    DATETIME        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.available_activity'

	ALTER TABLE dbo.[available_activity]
	    ADD CONSTRAINT PK_available_activity PRIMARY KEY CLUSTERED (court_id, activity_type_id)

	PRINT 'CREATE primary key pk_available_activity on table [dbo].[available_activity]'
END
