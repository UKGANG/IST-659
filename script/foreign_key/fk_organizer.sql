IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'user' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'organizer' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[organizer]  WITH CHECK ADD CONSTRAINT [fk_organizer_user_id] FOREIGN KEY([user_id])
	REFERENCES dbo.user ([user_id])

	ALTER TABLE dbo.[organizer] CHECK CONSTRAINT [fk_organizer_user_id]

	PRINT 'ADDED FOREIGN KEY fk_organizer_user_id TO dbo.organizer'
END