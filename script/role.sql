IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='role' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.role
	(
		role_id             BIGINT          NOT NULL,
		access_id           BIGINT          NOT NULL,
		user_id             BIGINT          NOT NULL,
		is_enabled          BIT             NOT NULL,
		role_name           NVARCHAR(255)   NOT NULL
	)

	PRINT 'CREATE TABLE dbo.role'

	ALTER TABLE dbo.[role]
		ADD CONSTRAINT PK_role PRIMARY KEY CLUSTERED (role_id)

	PRINT 'CREATE primary key pk_role on table [dbo].[role]'
END
