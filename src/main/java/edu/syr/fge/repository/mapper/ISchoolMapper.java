package edu.syr.fge.repository.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import edu.syr.fge.api.serializer.CourtDto;
import edu.syr.fge.domain.ActivityType;
import edu.syr.fge.domain.CourtReservation;
import edu.syr.fge.domain.Participant;
import edu.syr.fge.domain.Timeslot;

@Mapper
public interface ISchoolMapper {

	String testLink();
	Participant getUser(@Param("email") String email, @Param("password") String password);
	List<CourtDto> getCourts();
	List<ActivityType> getActivityTypes();
	List<Timeslot> getTimeslots(@Param("reservationDate") Date reservationDate);
	List<CourtReservation> saveCourtReservations(@Param("reservationDate") Date reservationDate);
//    List<TestPlan> listAvailableTestPlans(@Param("requestedDate") Date requestDate, @Param("currentDate") Date currentDate);
//
//    List<TestPlan> findTestPlans(@Param("planIds") List<Long> planIds);
//
//    void saveVariantRetrievalHistory(OfferVariantObjectRetrievalLog variantRetrievalHistory);
//
//    void saveVariantRetrievalHistoryChild(OfferVariantObjectRetrievalLog variantRetrievalHistory);

}
