package com.innovation.dfims.util;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

import com.innovation.dfims.exptn.AppException;

public class EncryptDecryptUtility
{
    private static final String KEY = "abcd1234shams786";

    private EncryptDecryptUtility()
    {
        //
    }

    public static String decrypt( String encData )
    {
        SecretKeySpec skeySpec = new SecretKeySpec( KEY.getBytes(), "AES" );
        byte[] original;
        try
        {
            byte[] valueDecoded = Base64.decodeBase64( encData );
            Cipher cipher = Cipher.getInstance( "AES" );
            cipher.init( Cipher.DECRYPT_MODE, skeySpec );
            Base64 base64 = new Base64();
            original = cipher.doFinal( base64.decode( valueDecoded ) );
        }
        catch ( NoSuchAlgorithmException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( NoSuchPaddingException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( InvalidKeyException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( IllegalBlockSizeException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( BadPaddingException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        return new String( original ).trim();
    }

    public static String encrypt( String data )
    {
        SecretKeySpec skeySpec = new SecretKeySpec( KEY.getBytes(), "AES" );
        byte[] original;
        byte[] bytesEncoded;
        try
        {
            Cipher cipher = Cipher.getInstance( "AES" );
            cipher.init( Cipher.ENCRYPT_MODE, skeySpec );
            Base64 base64 = new Base64();
            original = base64.encode( cipher.doFinal( data.getBytes() ) );
            bytesEncoded = Base64.encodeBase64( original );
        }
        catch ( NoSuchAlgorithmException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( NoSuchPaddingException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( InvalidKeyException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( IllegalBlockSizeException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        catch ( BadPaddingException ex )
        {
            throw new AppException( ex, ex.getMessage() );
        }
        return new String( bytesEncoded );
    }

    public static void main( String args[] )
    {
        try
        {
            String data = "shamsnezami@gmail.com";
            String e = EncryptDecryptUtility.encrypt( data );
            System.out.println( e );
            String d = EncryptDecryptUtility.decrypt( e );
            System.out.println( d );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }
    }
}
