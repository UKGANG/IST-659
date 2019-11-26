IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'activity_type' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'relevant_gear' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[relevant_gear]  WITH CHECK ADD CONSTRAINT [fk_relevant_gear_activity_type_id] FOREIGN KEY([activity_type_id])
	REFERENCES dbo.activity_type ([activity_type_id])

	ALTER TABLE dbo.[relevant_gear] CHECK CONSTRAINT [fk_relevant_gear_activity_type_id]

	PRINT 'ADDED FOREIGN KEY fk_relevant_gear_activity_type_id TO dbo.relevant_gear'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'gear' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'relevant_gear' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[relevant_gear]  WITH CHECK ADD CONSTRAINT [fk_relevant_gear_gear_id] FOREIGN KEY([gear_id])
	REFERENCES dbo.gear ([gear_id])

	ALTER TABLE dbo.[relevant_gear] CHECK CONSTRAINT [fk_relevant_gear_gear_id]

	PRINT 'ADDED FOREIGN KEY fk_relevant_gear_gear_id TO dbo.relevant_gear'
END
