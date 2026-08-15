# `kerberosAuthBackendConfig` Submodule <a name="`kerberosAuthBackendConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendConfig <a name="KerberosAuthBackendConfig" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config vault_kerberos_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfig;

KerberosAuthBackendConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keytabWo(java.lang.String)
    .keytabWoVersion(java.lang.Number)
    .mount(java.lang.String)
    .serviceAccount(java.lang.String)
//  .addGroupAliases(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .removeInstanceName(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWo">keytabWo</a></code> | <code>java.lang.String</code> | Base64-encoded keytab file content (write-only). Must contain an entry matching service_account. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWoVersion">keytabWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for keytab updates. Increment this value to trigger a keytab update. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The Kerberos service account associated with the keytab entry (e.g., 'vault_svc'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Adds group aliases during authentication. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Removes instance names from Kerberos service principal names. Default: false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keytabWo`<sup>Required</sup> <a name="keytabWo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWo"></a>

- *Type:* java.lang.String

Base64-encoded keytab file content (write-only). Must contain an entry matching service_account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo KerberosAuthBackendConfig#keytab_wo}

---

##### `keytabWoVersion`<sup>Required</sup> <a name="keytabWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.keytabWoVersion"></a>

- *Type:* java.lang.Number

Version identifier for keytab updates. Increment this value to trigger a keytab update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo_version KerberosAuthBackendConfig#keytab_wo_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#mount KerberosAuthBackendConfig#mount}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The Kerberos service account associated with the keytab entry (e.g., 'vault_svc').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#service_account KerberosAuthBackendConfig#service_account}

---

##### `addGroupAliases`<sup>Optional</sup> <a name="addGroupAliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.addGroupAliases"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Adds group aliases during authentication. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#add_group_aliases KerberosAuthBackendConfig#add_group_aliases}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#namespace KerberosAuthBackendConfig#namespace}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.Initializer.parameter.removeInstanceName"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Removes instance names from Kerberos service principal names. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#remove_instance_name KerberosAuthBackendConfig#remove_instance_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetAddGroupAliases">resetAddGroupAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetRemoveInstanceName">resetRemoveInstanceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddGroupAliases` <a name="resetAddGroupAliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetAddGroupAliases"></a>

```java
public void resetAddGroupAliases()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRemoveInstanceName` <a name="resetRemoveInstanceName" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.resetRemoveInstanceName"></a>

```java
public void resetRemoveInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfig;

KerberosAuthBackendConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfig;

KerberosAuthBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfig;

KerberosAuthBackendConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfig;

KerberosAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KerberosAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KerberosAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KerberosAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KerberosAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliasesInput">addGroupAliasesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoInput">keytabWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersionInput">keytabWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceNameInput">removeInstanceNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWo">keytabWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersion">keytabWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `addGroupAliasesInput`<sup>Optional</sup> <a name="addGroupAliasesInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliasesInput"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupAliasesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keytabWoInput`<sup>Optional</sup> <a name="keytabWoInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoInput"></a>

```java
public java.lang.String getKeytabWoInput();
```

- *Type:* java.lang.String

---

##### `keytabWoVersionInput`<sup>Optional</sup> <a name="keytabWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersionInput"></a>

```java
public java.lang.Number getKeytabWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `removeInstanceNameInput`<sup>Optional</sup> <a name="removeInstanceNameInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceNameInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `addGroupAliases`<sup>Required</sup> <a name="addGroupAliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.addGroupAliases"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupAliases();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### ~~`keytabWo`~~<sup>Required</sup> <a name="keytabWo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getKeytabWo();
```

- *Type:* java.lang.String

---

##### `keytabWoVersion`<sup>Required</sup> <a name="keytabWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.keytabWoVersion"></a>

```java
public java.lang.Number getKeytabWoVersion();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `removeInstanceName`<sup>Required</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.removeInstanceName"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendConfigConfig <a name="KerberosAuthBackendConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_config.KerberosAuthBackendConfigConfig;

KerberosAuthBackendConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keytabWo(java.lang.String)
    .keytabWoVersion(java.lang.Number)
    .mount(java.lang.String)
    .serviceAccount(java.lang.String)
//  .addGroupAliases(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .removeInstanceName(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWo">keytabWo</a></code> | <code>java.lang.String</code> | Base64-encoded keytab file content (write-only). Must contain an entry matching service_account. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWoVersion">keytabWoVersion</a></code> | <code>java.lang.Number</code> | Version identifier for keytab updates. Increment this value to trigger a keytab update. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The Kerberos service account associated with the keytab entry (e.g., 'vault_svc'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.addGroupAliases">addGroupAliases</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Adds group aliases during authentication. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Removes instance names from Kerberos service principal names. Default: false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keytabWo`<sup>Required</sup> <a name="keytabWo" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWo"></a>

```java
public java.lang.String getKeytabWo();
```

- *Type:* java.lang.String

Base64-encoded keytab file content (write-only). Must contain an entry matching service_account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo KerberosAuthBackendConfig#keytab_wo}

---

##### `keytabWoVersion`<sup>Required</sup> <a name="keytabWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.keytabWoVersion"></a>

```java
public java.lang.Number getKeytabWoVersion();
```

- *Type:* java.lang.Number

Version identifier for keytab updates. Increment this value to trigger a keytab update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo_version KerberosAuthBackendConfig#keytab_wo_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#mount KerberosAuthBackendConfig#mount}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The Kerberos service account associated with the keytab entry (e.g., 'vault_svc').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#service_account KerberosAuthBackendConfig#service_account}

---

##### `addGroupAliases`<sup>Optional</sup> <a name="addGroupAliases" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.addGroupAliases"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupAliases();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Adds group aliases during authentication. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#add_group_aliases KerberosAuthBackendConfig#add_group_aliases}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#namespace KerberosAuthBackendConfig#namespace}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.kerberosAuthBackendConfig.KerberosAuthBackendConfigConfig.property.removeInstanceName"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Removes instance names from Kerberos service principal names. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#remove_instance_name KerberosAuthBackendConfig#remove_instance_name}

---



