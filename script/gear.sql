ΩIF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.gear
	(
		gear_id             BIGINT          NOT NULL,
		gear_type_id        BIGINT          NOT NULL,
		use_frequency_count INT             NOT NULL,
		brand               NVARCHAR(255)
	)

	PRINT 'CREATE TABLE dbo.gear'

	ALTER TABLE dbo.[gear]
	    ADD CONSTRAINT pk_gear PRIMARY KEY CLUSTERED (gear_id)

	PRINT 'CREATE primary key pk_gear on table [dbo].[gear]'
END
