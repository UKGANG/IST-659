IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.gear_type
	(
		gear_type_id        BIGINT          NOT NULL,
		gear_name           NVARCHAR(255)   NOT NULL
	)

	PRINT 'CREATE TABLE dbo.gear_type'

	ALTER TABLE dbo.[gear_type]
		ADD CONSTRAINT pk_gear_type PRIMARY KEY CLUSTERED (gear_type_id)

	PRINT 'CREATE primary key pk_gear_type on table [dbo].[gear_type]'
END
