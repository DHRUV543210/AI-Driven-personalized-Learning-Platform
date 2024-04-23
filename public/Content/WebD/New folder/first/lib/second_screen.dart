import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class Second_Screen extends StatefulWidget {
  const Second_Screen({super.key});

  @override
  State<Second_Screen> createState() => _Second_ScreenState();
}

class _Second_ScreenState extends State<Second_Screen> {
  var listSize = 0 ;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("this is the list"),),
      body: ListView.builder(
        itemCount: listSize,
        itemBuilder: (context , index){

        return Text("this is the text");
      }),
      floatingActionButton: FloatingActionButton(onPressed: (){
        listSize++;
        setState(() {
          
        });
      },),
    );;
  }
}