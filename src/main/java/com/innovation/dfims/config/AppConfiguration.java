package com.innovation.dfims.config;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@EnableTransactionManagement
@ComponentScan(basePackages = "com")
public class AppConfiguration extends WebMvcConfigurerAdapter {
	// Configure a DataSource to be used
	@Bean(name = "dataSource")
	public DataSource getDataSource() {
		final BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		String host = AppConstant.MYSQL_DB_HOST;
		String port = AppConstant.MYSQL_DB_PORT;
		String username = AppConstant.MYSQL_USERNAME;
		String password = AppConstant.MYSQL_PASSWRD;
		String database = AppConstant.MYSQL_SCHEMA;
		dataSource.setUrl("jdbc:mysql://" + host + ":" + port + "/" + database);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		System.out.println("dataSource::"+dataSource);
		return dataSource;
	}

	// Configure a transaction manager for @Transactional usage
	// make sure to throw RuntimeException from the method which has
	// @Transactional
	@Autowired
	@Qualifier("dataSource")
	@Bean(name = "transactionManager")
	public DataSourceTransactionManager getTransactionManager(
			final DataSource travelDataSource) {
		return new DataSourceTransactionManager(travelDataSource);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("swagger-ui.html").addResourceLocations(
				"classpath:/META-INF/resources/");
		registry.addResourceHandler("/webjars/**").addResourceLocations(
				"classpath:/META-INF/resources/webjars/");

		registry.addResourceHandler("/images/**").addResourceLocations(
				"/images/");
		registry.addResourceHandler("/html/**").addResourceLocations("/html/");
		registry.addResourceHandler("/jsp/**").addResourceLocations("/jsp/");
		registry.addResourceHandler("/media/**")
				.addResourceLocations("/media/");
		registry.addResourceHandler("/css/**").addResourceLocations("/css/");
		registry.addResourceHandler("/font/**").addResourceLocations("/font/");
		registry.addResourceHandler("/js/**").addResourceLocations("/js/");
	}
}
