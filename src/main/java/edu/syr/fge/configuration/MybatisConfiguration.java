//package edu.syr.fge.configuration;
//
//import org.apache.ibatis.session.SqlSessionFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Lazy;
//import org.springframework.jdbc.datasource.DataSourceTransactionManager;
//import org.springframework.transaction.PlatformTransactionManager;
//
//import java.io.IOException;
//
//@Configuration
//public class MybatisConfiguration {
//
//	@Value("${spring.datasource.username}")
//    private String instance;
//
//	@Bean(name = "oltpTx")
//    @Lazy
//    @Autowired
//    public PlatformTransactionManager getMyBatisTransactionManager(SqlSessionFactory sqlSessionFactory) throws IOException {
//        return new DataSourceTransactionManager(sqlSessionFactory.
//                getConfiguration().getEnvironment().getDataSource());
//    }
//}
