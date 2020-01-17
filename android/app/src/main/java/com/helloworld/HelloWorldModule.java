package com.helloworld;


import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloWorldModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    public HelloWorldModule(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
        this.reactContext = reactContext;


    }

    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() {
        return "HelloWorld";
    }

    @ReactMethod
    public void sayHi(Callback errorCallback, Callback successCallback) {
        System.out.println("thise text is from the java class");
        Toast.makeText(getReactApplicationContext(), "welcome", Toast.LENGTH_SHORT).show();
        successCallback.invoke("Callback : thise is suceess call back");



    }

}
