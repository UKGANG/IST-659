IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'organizer' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'reservation' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[reservation]  WITH CHECK ADD CONSTRAINT [fk_reservation_organizer_id] FOREIGN KEY([organizer_id])
	REFERENCES dbo.organizer ([organizer_id])

	ALTER TABLE dbo.[reservation] CHECK CONSTRAINT [fk_reservation_organizer_id]

	PRINT 'ADDED FOREIGN KEY fk_reservation_organizer_id TO dbo.reservation'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'court' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'reservation' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[reservation]  WITH CHECK ADD CONSTRAINT [fk_reservation_court_id] FOREIGN KEY([court_id])
	REFERENCES dbo.court ([court_id])

	ALTER TABLE dbo.[reservation] CHECK CONSTRAINT [fk_reservation_court_id]

	PRINT 'ADDED FOREIGN KEY fk_reservation_court_id TO dbo.reservation'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'activity_type' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'reservation' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[reservation]  WITH CHECK ADD CONSTRAINT [fk_reservation_activity_type_id] FOREIGN KEY([activity_type_id])
	REFERENCES dbo.activity_type ([activity_type_id])

	ALTER TABLE dbo.[reservation] CHECK CONSTRAINT [fk_reservation_activity_type_id]

	PRINT 'ADDED FOREIGN KEY fk_reservation_activity_type_id TO dbo.reservation'
END