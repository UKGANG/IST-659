IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='user' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.user
	(
		user_id             BIGINT          NOT NULL,
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

	PRINT 'CREATE TABLE dbo.user'

	ALTER TABLE dbo.[user]
		ADD CONSTRAINT PK_user PRIMARY KEY CLUSTERED (user_id)

	PRINT 'CREATE primary key pk_user on table [dbo].[user]'
END
