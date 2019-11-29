package edu.syr.fge.repository.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import edu.syr.fge.api.serializer.CourtDto;
import edu.syr.fge.domain.AvailableActivity;
import edu.syr.fge.domain.Gear;
import edu.syr.fge.domain.Participant;
import edu.syr.fge.domain.Timeslot;
import edu.syr.fge.repository.vo.OrganizerVo;
import edu.syr.fge.repository.vo.ReservationVo;

@Mapper
public interface ISchoolMapper {

	Participant getUser(@Param("email") String email, @Param("password") String password);
	List<CourtDto> getCourts();
	List<AvailableActivity> getAvailableActivities(@Param("courtIds") List<String> courtIds);
	List<Timeslot> getTimeslots(@Param("reservationDate") Date reservationDate);
	void createOrganizer(@Param("organizer") OrganizerVo organizerVo);
	void createCourtReservation(@Param("reservation") ReservationVo reservationVo);
	void createTimeslots(@Param("timeslots") List<Timeslot> timeslots);
	void removeTimeslots(@Param("timeslots") List<Timeslot> timeslots);
	void checkIn(@Param("reservationCode") String reservationCode);
	List<Gear> retrieveAvailableGears(@Param("reservationCode") String reservationCode);
//    List<TestPlan> listAvailableTestPlans(@Param("requestedDate") Date requestDate, @Param("currentDate") Date currentDate);
//
//    List<TestPlan> findTestPlans(@Param("planIds") List<Long> planIds);
//
//    void saveVariantRetrievalHistory(OfferVariantObjectRetrievalLog variantRetrievalHistory);
//
//    void saveVariantRetrievalHistoryChild(OfferVariantObjectRetrievalLog variantRetrievalHistory);

}
