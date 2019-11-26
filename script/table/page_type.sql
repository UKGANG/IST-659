IF NOT EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='page_type' AND SCHEMA_NAME(schema_id)='dbo')
BEGIN

	CREATE TABLE dbo.page_type
	(
		page_type_id           BIGINT          NOT NULL,
		page_name           NVARCHAR(255)   NOT NULL,
		is_enabled          BIT             NOT NULL
	)

	PRINT 'CREATE TABLE dbo.page_type'

	ALTER TABLE dbo.[page_type]
	    ADD CONSTRAINT PK_page_type PRIMARY KEY CLUSTERED (page_type_id)

	PRINT 'CREATE primary key pk_page_type on table [dbo].[page_type]'
END
