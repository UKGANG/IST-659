IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='relevant_gear' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.relevant_gear
	(
		activity_type_id	SMALLINT          NOT NULL,
		gear_id             BIGINT          NOT NULL,
		quantity            INT             NOT NULL,
		is_required         BIT             NOT NULL
	)

	PRINT 'CREATE TABLE dbo.relevant_gear'

	ALTER TABLE dbo.[relevant_gear]
		ADD CONSTRAINT PK_relevant_gear PRIMARY KEY CLUSTERED (activity_type_id, gear_id)

	PRINT 'CREATE primary key pk_relevant_gear on table [dbo].[relevant_gear]'
END
