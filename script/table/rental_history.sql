IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='rental_history' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.rental_history
	(
		rental_history_id	BIGINT         NOT NULL,
		organizer_id        BIGINT          NOT NULL,
		gear_id             BIGINT          NOT NULL,
		borrow_datetime     DATETIME        NOT NULL,
		return_datetime     DATETIME
	)

	PRINT 'CREATE TABLE dbo.rental_history'

	ALTER TABLE dbo.[rental_history]
		ADD CONSTRAINT PK_rental_history PRIMARY KEY CLUSTERED (rental_history_id)

	PRINT 'CREATE primary key pk_rental_history on table [dbo].[rental_history]'
END
