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

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'page_type' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'role' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[role]  WITH CHECK ADD CONSTRAINT [fk_role_page_type_id] FOREIGN KEY([page_type_id])
	REFERENCES dbo.page_type ([page_type_id])

	ALTER TABLE dbo.[role] CHECK CONSTRAINT [fk_role_page_type_id]

	PRINT 'ADDED FOREIGN KEY fk_role_page_type_id TO dbo.role'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'participant' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'role' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[role]  WITH CHECK ADD CONSTRAINT [fk_role_participant_id] FOREIGN KEY([participant_id])
	REFERENCES dbo.participant ([participant_id])

	ALTER TABLE dbo.[role] CHECK CONSTRAINT [fk_role_participant_id]

	PRINT 'ADDED FOREIGN KEY fk_role_participant_id TO dbo.role'
END

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

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'participant' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'organizer' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[organizer]  WITH CHECK ADD CONSTRAINT [fk_organizer_participant_id] FOREIGN KEY([participant_id])
	REFERENCES dbo.participant ([participant_id])

	ALTER TABLE dbo.[organizer] CHECK CONSTRAINT [fk_organizer_participant_id]

	PRINT 'ADDED FOREIGN KEY fk_organizer_participant_id TO dbo.organizer'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'gear_type' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'gear' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[gear]  WITH CHECK ADD CONSTRAINT [fk_gear_gear_type_id] FOREIGN KEY([gear_type_id])
	REFERENCES dbo.gear_type ([gear_type_id])

	ALTER TABLE dbo.[gear] CHECK CONSTRAINT [fk_gear_gear_type_id]

	PRINT 'ADDED FOREIGN KEY fk_gear_gear_type_id TO dbo.gear'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'participant' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'credential' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[credential]  WITH CHECK ADD CONSTRAINT [fk_credential_participant_id] FOREIGN KEY([participant_id])
	REFERENCES dbo.participant ([participant_id])

	ALTER TABLE dbo.[credential] CHECK CONSTRAINT [fk_credential_participant_id]

	PRINT 'ADDED FOREIGN KEY fk_credential_participant_id TO dbo.credential'
END

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

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'court' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'available_activity' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[available_activity]  WITH CHECK ADD CONSTRAINT [fk_available_activity_court_id] FOREIGN KEY([court_id])
	REFERENCES dbo.court ([court_id])

	ALTER TABLE dbo.[available_activity] CHECK CONSTRAINT [fk_available_activity_court_id]

	PRINT 'ADDED FOREIGN KEY fk_available_activity_court_id TO dbo.available_activity'
END

IF NOT EXISTS (SELECT TOP 1 1
	FROM sys.foreign_key_columns fk WITH(NOLOCK)
	JOIN sys.tables t WITH(NOLOCK) ON fk.parent_object_id = t.object_id
	JOIN sys.columns c WITH(NOLOCK) ON fk.parent_object_id = c.object_id AND fk.parent_column_id = c.column_id
	JOIN sys.tables t2 WITH(NOLOCK) ON fk.referenced_object_id = t2.object_id AND SCHEMA_NAME(t2.schema_id) LIKE 'dbo'
		AND OBJECT_NAME(t2.object_id) LIKE 'activity_type' AND t2.[type] = 'U'
	WHERE SCHEMA_NAME(t.schema_id) LIKE 'dbo' AND OBJECT_NAME(t.object_id) LIKE 'available_activity' AND t.[type] = 'U')
BEGIN

	ALTER TABLE dbo.[available_activity]  WITH CHECK ADD CONSTRAINT [fk_available_activity_activity_type_id] FOREIGN KEY([activity_type_id])
	REFERENCES dbo.activity_type ([activity_type_id])

	ALTER TABLE dbo.[available_activity] CHECK CONSTRAINT [fk_available_activity_activity_type_id]

	PRINT 'ADDED FOREIGN KEY fk_available_activity_activity_type_id TO dbo.available_activity'
END