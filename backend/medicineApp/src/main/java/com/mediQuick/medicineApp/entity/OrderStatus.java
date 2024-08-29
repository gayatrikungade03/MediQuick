package com.mediQuick.medicineApp.entity;

public enum OrderStatus {
	

	    NEW("Order was placed by the customer"),
	    CANCELLED("Order was rejected"),
	    PROCESSING("Order is being processed"),
	    PACKAGED("Products were packaged"),
	    PICKED("Shipper picked the package"),
	    SHIPPING("Shipper is delivering the package"),
	    DELIVERED("Customer received products"),
	    RETURN_REQUESTED("Customer sent request to return purchase"),
	    RETURNED("Products were returned"),
	    REFUNDED("Customer has been refunded");

	    private final String description;

	    OrderStatus(String description) {
	        this.description = description;
	    }

	    public String getDescription() {
	        return description;
	    }
	}