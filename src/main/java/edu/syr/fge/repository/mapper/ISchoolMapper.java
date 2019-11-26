package edu.syr.fge.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

/**
 * Created by shawnxu on 6/3/2017.
 */
@Mapper
public interface ISchoolMapper {

	String testLink();
//    List<TestPlan> listAvailableTestPlans(@Param("requestedDate") Date requestDate, @Param("currentDate") Date currentDate);
//
//    List<TestPlan> findTestPlans(@Param("planIds") List<Long> planIds);
//
//    void saveVariantRetrievalHistory(OfferVariantObjectRetrievalLog variantRetrievalHistory);
//
//    void saveVariantRetrievalHistoryChild(OfferVariantObjectRetrievalLog variantRetrievalHistory);

}
