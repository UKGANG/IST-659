IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='activity_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.activity_type
	(
		activity_type_id    SMALLINT        NOT NULL IDENTITY,
		activity_name       NVARCHAR(255)   NOT NULL,
		maximum_participant SMALLINT        NOT NULL
	)

	PRINT 'CREATE TABLE dbo.activity_type'

	ALTER TABLE dbo.[activity_type]
	    ADD CONSTRAINT PK_activity_type PRIMARY KEY CLUSTERED (activity_type_id)

	PRINT 'CREATE primary key pk_activity_type on table [dbo].[activity_type]'
END
