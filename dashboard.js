import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.sidebar}>
        <div className={styles.footer}>
          <img className={styles.iconsettings} alt="" src="/iconsettings.svg" />
          <img className={styles.iconlogout} alt="" src="/iconlogout.svg" />
          <img className={styles.iconlogout} alt="" src="/iconglobe.svg" />
        </div>
        <div className={styles.menu}>
          <div className={styles.section01}>
            <div className={styles.title}>
              <div className={styles.dAS}>D A S H B O A R D</div>
            </div>
            <div className={styles.links}>
              <div className={styles.elementsmenuLink}>
                <div className={styles.header}>
                  <div className={styles.frameParent}>
                    <div className={styles.iconstatsParent}>
                      <img
                        className={styles.iconlogout}
                        alt=""
                        src="/iconstats.svg"
                      />
                      <div className={styles.reports}>Dashboard</div>
                    </div>
                    <div className={styles.number}>
                      <img
                        className={styles.numberChild}
                        alt=""
                        src="/ellipse-1.svg"
                      />
                      <b className={styles.b}>2</b>
                    </div>
                  </div>
                  <img
                    className={styles.iconchevronUp}
                    alt=""
                    src="/iconchevronup.svg"
                  />
                </div>
                <div className={styles.links1}>
                  <div className={styles.record}>Record</div>
                  <div className={styles.reports}>Reports</div>
                  <div className={styles.reports}>Analyse</div>
                  <div className={styles.reports}>Learn</div>
                </div>
              </div>
              <div className={styles.elementsmenuLink1}>
                <div className={styles.frameGroup}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconemail.svg"
                    />
                    <div className={styles.reports}>Messages</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronDown}
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
              <div className={styles.elementsmenuLink1}>
                <div className={styles.frameGroup}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconuser.svg"
                    />
                    <div className={styles.reports}>Friends</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronDown}
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
              <div className={styles.elementsmenuLink1}>
                <div className={styles.frameGroup}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconlayoutgrid.svg"
                    />
                    <div className={styles.reports}>Apps</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronDown}
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.section01}>
            <div className={styles.title}>
              <div className={styles.dAS}>P A G E S</div>
            </div>
            <div className={styles.links}>
              <div className={styles.elementsmenuLink4}>
                <div className={styles.frameGroup}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconsupport.svg"
                    />
                    <div className={styles.reports}>Help Center</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronDown}
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
              <div className={styles.elementsmenuLink4}>
                <div className={styles.frameGroup}>
                  <div className={styles.iconstatsParent}>
                    <img
                      className={styles.iconlogout}
                      alt=""
                      src="/iconfolder.svg"
                    />
                    <div className={styles.reports}>File Manager</div>
                  </div>
                  <div className={styles.number}>
                    <img
                      className={styles.numberChild}
                      alt=""
                      src="/ellipse-1.svg"
                    />
                    <b className={styles.b}>2</b>
                  </div>
                </div>
                <img
                  className={styles.iconchevronDown}
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.screenshot20230301At1056}
          alt=""
          src="/screenshot-20230301-at-1056-1@2x.png"
        />
      </section>
      <nav className={styles.body}>
        <div className={styles.elementstopBar}>
          <div className={styles.items}>
            <div className={styles.icons}>
              <img
                className={styles.iconIndicator}
                alt=""
                src="/icon-indicator.svg"
              />
              <img
                className={styles.iconcalendar}
                alt=""
                src="/iconcalendar.svg"
              />
              <img
                className={styles.iconcalendar}
                alt=""
                src="/iconlayoutgrid1.svg"
              />
            </div>
            <div className={styles.avatar}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.pasteImageIcon}
                  alt=""
                  src="/paste-image@2x.png"
                />
              </div>
              <div className={styles.indicator} />
            </div>
          </div>
          <div className={styles.formInput}>
            <div className={styles.formelementstitle}>Label</div>
            <div className={styles.input}>
              <div className={styles.iconinput}>
                <img
                  className={styles.iconlogout}
                  alt=""
                  src="/iconsearch.svg"
                />
                <div className={styles.yourEmail}>Search...</div>
              </div>
              <img
                className={styles.iconarrowRight}
                alt=""
                src="/iconarrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.metricsWrapper}>
          <div className={styles.metrics}>
            <div className={styles.metricCards}>
              <div className={styles.content}>
                <div className={styles.header1}>
                  <div className={styles.carbonFootprint}>Carbon FootPrint</div>
                  <div className={styles.tCo2e}>2,412,314t CO2e</div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.content1}>
                    <div className={styles.indicator1} />
                    <img
                      className={styles.icontrendUp}
                      alt=""
                      src="/icontrend-up.svg"
                    />
                    <div className={styles.hello}>-45%</div>
                    <img
                      className={styles.icontrendUp}
                      alt=""
                      src="/iconclose.svg"
                    />
                  </div>
                </div>
                <div className={styles.info} />
              </div>
            </div>
            <div className={styles.typemetricStylestyle6}>
              <div className={styles.content2}>
                <div className={styles.header2}>
                  <div className={styles.carbonFootprint}>
                    Emissions by Spinning
                  </div>
                  <div className={styles.tCo2e}>72,3694t</div>
                  <div className={styles.co2e}>CO2e</div>
                </div>
                <div className={styles.badge1}>
                  <div className={styles.content1}>
                    <div className={styles.indicator1} />
                    <img
                      className={styles.icontrendUp}
                      alt=""
                      src="/icontrend-up1.svg"
                    />
                    <div className={styles.hello}>-60%</div>
                    <img
                      className={styles.icontrendUp}
                      alt=""
                      src="/iconclose1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typemetricStylestyle7}>
              <div className={styles.content4}>
                <div className={styles.header3}>
                  <div className={styles.carbonFootprint}>
                    Emission By Transportation
                  </div>
                  <div className={styles.tCo2e}>361,874t</div>
                  <div className={styles.co2e}>CO2e</div>
                </div>
                <div className={styles.info1}>
                  <div className={styles.badge2}>
                    <div className={styles.content1}>
                      <div className={styles.indicator1} />
                      <img
                        className={styles.icontrendUp}
                        alt=""
                        src="/icontrend-up.svg"
                      />
                      <div className={styles.hello2}>0.00</div>
                      <img
                        className={styles.icontrendUp}
                        alt=""
                        src="/iconclose.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.from46}>From 4.6%</div>
                </div>
              </div>
            </div>
            <div className={styles.typemetricStylestyle8}>
              <div className={styles.content6}>
                <div className={styles.header4}>
                  <div className={styles.carbonFootprint}>
                    Emission by Carding
                  </div>
                  <div className={styles.tCo2e}>241,231</div>
                  <div className={styles.co2e}>CO2e</div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.badge3}>
                    <div className={styles.content1}>
                      <div className={styles.indicator1} />
                      <img
                        className={styles.icontrendUp}
                        alt=""
                        src="/icontrend-up2.svg"
                      />
                      <div className={styles.hello}>+0.6%</div>
                      <img
                        className={styles.icontrendUp}
                        alt=""
                        src="/iconclose2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.from461}>From 4.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className={styles.consumptionPerDay}>
        <b className={styles.title2}>Carbon Footprint</b>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.groupParent}>
          <div className={styles.lineParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.kParent}>
              <div className={styles.k}>50k</div>
              <div className={styles.k1}>100k</div>
              <div className={styles.k2}>150k</div>
              <div className={styles.k3}>200k</div>
              <div className={styles.k4}>250k</div>
              <div className={styles.k5}>300k</div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleParent}>
              <textarea className={styles.groupInner} />
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild1} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-360.svg"
              />
            </div>
            <div className={styles.jan}>Jan</div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild2} />
              <div className={styles.groupChild3} />
              <div className={styles.groupChild4} />
              <img
                className={styles.groupChild5}
                alt=""
                src="/rectangle-3601.svg"
              />
            </div>
            <div className={styles.feb}>Feb</div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div className={styles.groupChild8} />
              <img
                className={styles.groupChild9}
                alt=""
                src="/rectangle-3602.svg"
              />
            </div>
            <div className={styles.mar}>Mar</div>
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild10} />
              <div className={styles.groupChild11} />
              <div className={styles.groupChild12} />
              <img
                className={styles.groupChild13}
                alt=""
                src="/rectangle-3603.svg"
              />
            </div>
            <div className={styles.apr}>Apr</div>
          </div>
          <div className={styles.groupParent3}>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild14} />
              <div className={styles.groupChild15} />
              <div className={styles.groupChild16} />
              <img
                className={styles.groupChild17}
                alt=""
                src="/rectangle-3604.svg"
              />
            </div>
            <div className={styles.may}>May</div>
          </div>
          <div className={styles.groupParent4}>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupChild18} />
              <div className={styles.groupChild19} />
              <div className={styles.groupChild20} />
              <img
                className={styles.groupChild21}
                alt=""
                src="/rectangle-3605.svg"
              />
            </div>
            <div className={styles.june}>June</div>
          </div>
          <div className={styles.groupParent5}>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild22} />
              <div className={styles.groupChild23} />
              <div className={styles.groupChild24} />
              <img
                className={styles.groupChild25}
                alt=""
                src="/rectangle-3606.svg"
              />
            </div>
            <div className={styles.july}>July</div>
          </div>
        </div>
        <div className={styles.groupParent6}>
          <div className={styles.ellipseParent}>
            <img className={styles.groupChild26} alt="" src="/ellipse-86.svg" />
            <div className={styles.spinning}>Spinning</div>
          </div>
          <div className={styles.ellipseGroup}>
            <img className={styles.groupChild26} alt="" src="/ellipse-85.svg" />
            <div className={styles.spinning}>Transportation</div>
          </div>
          <div className={styles.ellipseContainer}>
            <img className={styles.groupChild26} alt="" src="/ellipse-84.svg" />
            <div className={styles.spinning}>Carding</div>
          </div>
          <div className={styles.ellipseParent1}>
            <img className={styles.groupChild26} alt="" src="/ellipse-83.svg" />
            <div className={styles.spinning}>{`Heating & Cooling`}</div>
          </div>
        </div>
      </section>
      <section className={styles.groupSection}>
        <div className={styles.groupChild30} />
        <div className={styles.groupParent7}>
          <div className={styles.ellipseParent2}>
            <img className={styles.groupChild26} alt="" src="/ellipse-86.svg" />
            <div className={styles.spinning1}>Spinning</div>
            <div className={styles.div1}>22%</div>
          </div>
          <div className={styles.ellipseParent3}>
            <img className={styles.groupChild26} alt="" src="/ellipse-85.svg" />
            <div className={styles.spinning1}>Transportation</div>
            <div className={styles.div1}>16%</div>
          </div>
          <div className={styles.ellipseParent4}>
            <img className={styles.groupChild26} alt="" src="/ellipse-84.svg" />
            <div className={styles.spinning1}>Carding</div>
            <div className={styles.div1}>27%</div>
          </div>
          <div className={styles.ellipseParent5}>
            <img className={styles.groupChild26} alt="" src="/ellipse-83.svg" />
            <div className={styles.spinning1}>{`Heating & Cooling`}</div>
            <div className={styles.div1}>35%</div>
          </div>
        </div>
        <b className={styles.title3}>Top emissions by type</b>
        <img className={styles.groupIcon} alt="" src="/group-156.svg" />
      </section>
    </div>
  );
};

export default Dashboard;
