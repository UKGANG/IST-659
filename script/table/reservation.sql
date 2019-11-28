IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='reservation' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.reservation
	(
		reservation_id      BIGINT          NOT NULL IDENTITY,
		organizer_id        BIGINT          NOT NULL,
		court_id            BIGINT          NOT NULL,
		activity_type_id    SMALLINT          NOT NULL,
		reservation_code   NVARCHAR(36)     NOT NULL,
		participant_count   SMALLINT,
		checked_in			BIT
	)

	PRINT 'CREATE TABLE dbo.reservation'

	ALTER TABLE dbo.[reservation]
		ADD CONSTRAINT PK_reservation PRIMARY KEY CLUSTERED (reservation_id)

	PRINT 'CREATE primary key pk_reservation on table [dbo].[reservation]'
END
