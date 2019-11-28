IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='timeslot' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.timeslot
	(
		timeslot_id         BIGINT          NOT NULL IDENTITY,
		reservation_id      BIGINT          NOT NULL,
		start_datetime      DATETIME        NOT NULL,
		end_datetime        DATETIME        NOT NULL,
	)

	PRINT 'CREATE TABLE dbo.timeslot'

	ALTER TABLE dbo.[timeslot]
		ADD CONSTRAINT PK_timeslot PRIMARY KEY CLUSTERED (timeslot_id)

	PRINT 'CREATE primary key pk_timeslot on table [dbo].[timeslot]'
END
