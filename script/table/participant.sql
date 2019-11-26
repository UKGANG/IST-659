IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='participant' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.participant
	(
		participant_id             BIGINT          NOT NULL,
		email               NVARCHAR(255)   NOT NULL,
		phone_no            INT             NOT NULL,
		first_name          NVARCHAR(255)   NOT NULL,
		middle_name         NVARCHAR(255),
		last_name           NVARCHAR(255)   NOT NULL,
		gender              NVARCHAR(10)    NOT NULL,
		dob                 VARCHAR(9)      NOT NULL,
		age                 SMALLINT,
		ssn                 VARCHAR(9),
		created_datetime    DATETIME        NOT NULL,
		no_show_count       SMALLINT
	)

	PRINT 'CREATE TABLE dbo.participant'

	ALTER TABLE dbo.[participant]
		ADD CONSTRAINT PK_participant PRIMARY KEY CLUSTERED (participant_id)

	PRINT 'CREATE primary key pk_participant on table [dbo].[participant]'
END
