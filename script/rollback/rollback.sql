IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='availabletimeslot_activity' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[timeslot];

	PRINT 'DROP TABLE dbo.[timeslot]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='reservation' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[reservation];

	PRINT 'DROP TABLE dbo.[reservation]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='available_activity' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[available_activity];

	PRINT 'DROP TABLE dbo.[available_activity]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[court];

	PRINT 'DROP TABLE dbo.[court]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='court_location' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[court_location];

	PRINT 'DROP TABLE dbo.[court_location]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='rental_history' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[rental_history];

	PRINT 'DROP TABLE dbo.[rental_history]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='organizer' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[organizer];

	PRINT 'DROP TABLE dbo.[organizer]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='credential' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[credential];

	PRINT 'DROP TABLE dbo.[credential]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='role' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[role];

	PRINT 'DROP TABLE dbo.[role]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='page_type' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[page_type];

	PRINT 'DROP TABLE dbo.[page_type]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='participant' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[participant];

	PRINT 'DROP TABLE dbo.[participant]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='relevant_gear' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[relevant_gear];

	PRINT 'DROP TABLE dbo.[relevant_gear]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='activity_type' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[activity_type];

	PRINT 'DROP TABLE dbo.[activity_type]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[gear];

	PRINT 'DROP TABLE dbo.[gear]'
END


IF EXISTS(SELECT TOP 1 1 FROM sys.tables WHERE name='gear_type' AND SCHEMA_NAME(schema_id)='dbo') 
BEGIN
	DROP TABLE dbo.[gear_type];

	PRINT 'DROP TABLE dbo.[gear_type]'
END

