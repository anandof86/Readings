# Readings

https://egghead.io/lessons/react-render-a-react-ui-with-jsx
VINO-PC (19:59):
<plugin>

<groupId>org.apache.maven.plugins</groupId>

<artifactId>maven-assembly-plugin</artifactId>

<version>2.4.1</version>
-<configuration>

<!-- get all project dependencies -->



-<descriptorRefs>

<descriptorRef>jar-with-dependencies</descriptorRef>

</descriptorRefs>

<!-- MainClass in mainfest make a executable jar -->



-<archive>


-<manifest>

<mainClass>com.fulfill.autofill.controller.Service</mainClass>

</manifest>

</archive>

</configuration>


-<executions>


-<execution>

<id>make-assembly</id>

<!-- bind to the packaging phase -->


<phase>package</phase>


-<goals>

<goal>single</goal>

</goals>

</execution>

</executions>

</plugin>
