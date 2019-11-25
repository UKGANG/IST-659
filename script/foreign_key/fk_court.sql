IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'court_location' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'court' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[court]  WITH CHECK ADD CONSTRAINT [fk_court_court_location_id] FOREIGN KEY([court_location_id])
	REFERENCES dbo.court_location ([court_location_id])

	ALTER TABLE dbo.[court] CHECK CONSTRAINT [fk_court_court_location_id]

	PRINT 'ADDED FOREIGN KEY fk_court_court_location_id TO dbo.court'
END
