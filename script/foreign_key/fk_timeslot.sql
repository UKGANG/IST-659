IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'reservation' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'timeslot' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[timeslot]  WITH CHECK ADD CONSTRAINT [fk_timeslot_reservation_id] FOREIGN KEY([reservation_id])
	REFERENCES dbo.reservation ([reservation_id])

	ALTER TABLE dbo.[timeslot] CHECK CONSTRAINT [fk_timeslot_reservation_id]

	PRINT 'ADDED FOREIGN KEY fk_timeslot_reservation_id TO dbo.timeslot'
END
