IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'organizer' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'rental_history' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[rental_history]  WITH CHECK ADD CONSTRAINT [fk_rental_history_organizer_id] FOREIGN KEY([organizer_id])
	REFERENCES dbo.organizer ([organizer_id])

	ALTER TABLE dbo.[rental_history] CHECK CONSTRAINT [fk_rental_history_organizer_id]

	PRINT 'ADDED FOREIGN KEY fk_rental_history_organizer_id TO dbo.rental_history'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'gear' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'rental_history' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[rental_history]  WITH CHECK ADD CONSTRAINT [fk_rental_history_gear_id] FOREIGN KEY([gear_id])
	REFERENCES dbo.gear ([gear_id])

	ALTER TABLE dbo.[rental_history] CHECK CONSTRAINT [fk_rental_history_gear_id]

	PRINT 'ADDED FOREIGN KEY fk_rental_history_gear_id TO dbo.rental_history'
END