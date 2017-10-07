package com.innovation.dfims.dto;

import java.io.Serializable;

public class MapCoordinatesDetails implements Serializable {
	private static final long serialVersionUID = 1L;

	private String latitude = null;
	private String longitude = null;

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(final String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(final String longitude) {
		this.longitude = longitude;
	}

	@Override
	public String toString() {
		return "Map Coordinates [Latitude=" + latitude + ", Longitude="
				+ longitude + "]";
	}

}
