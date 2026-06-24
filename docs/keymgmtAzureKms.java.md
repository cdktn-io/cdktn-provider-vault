# `keymgmtAzureKms` Submodule <a name="`keymgmtAzureKms` Submodule" id="@cdktn/provider-vault.keymgmtAzureKms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtAzureKms <a name="KeymgmtAzureKms" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms vault_keymgmt_azure_kms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKms;

KeymgmtAzureKms.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyCollection(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .credentialsWo(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialsWoVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.keyCollection">keyCollection</a></code> | <code>java.lang.String</code> | Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Azure Key Vault provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.credentialsWo">credentialsWo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The credentials to use for authentication with Azure Key Vault. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.keyCollection"></a>

- *Type:* java.lang.String

Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#key_collection KeymgmtAzureKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#mount KeymgmtAzureKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the Azure Key Vault provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#name KeymgmtAzureKms#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.credentialsWo"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The credentials to use for authentication with Azure Key Vault.

Supplying values for this parameter is optional, as credentials may also be specified as environment variables. Environment variables will take precedence over credentials provided via this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#credentials_wo KeymgmtAzureKms#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.credentialsWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#credentials_wo_version KeymgmtAzureKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#namespace KeymgmtAzureKms#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWo">resetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWoVersion">resetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialsWo` <a name="resetCredentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWo"></a>

```java
public void resetCredentialsWo()
```

##### `resetCredentialsWoVersion` <a name="resetCredentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWoVersion"></a>

```java
public void resetCredentialsWoVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtAzureKms resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKms;

KeymgmtAzureKms.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKms;

KeymgmtAzureKms.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKms;

KeymgmtAzureKms.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKms;

KeymgmtAzureKms.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeymgmtAzureKms.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KeymgmtAzureKms resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeymgmtAzureKms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeymgmtAzureKms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtAzureKms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoInput">credentialsWoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersionInput">credentialsWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollectionInput">keyCollectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWo">credentialsWo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollection">keyCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `credentialsWoInput`<sup>Optional</sup> <a name="credentialsWoInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialsWoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialsWoVersionInput`<sup>Optional</sup> <a name="credentialsWoVersionInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersionInput"></a>

```java
public java.lang.Number getCredentialsWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `keyCollectionInput`<sup>Optional</sup> <a name="keyCollectionInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollectionInput"></a>

```java
public java.lang.String getKeyCollectionInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `credentialsWo`<sup>Required</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialsWo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `credentialsWoVersion`<sup>Required</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersion"></a>

```java
public java.lang.Number getCredentialsWoVersion();
```

- *Type:* java.lang.Number

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollection"></a>

```java
public java.lang.String getKeyCollection();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtAzureKmsConfig <a name="KeymgmtAzureKmsConfig" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.keymgmt_azure_kms.KeymgmtAzureKmsConfig;

KeymgmtAzureKmsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyCollection(java.lang.String)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .credentialsWo(java.util.Map<java.lang.String, java.lang.String>)
//  .credentialsWoVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.keyCollection">keyCollection</a></code> | <code>java.lang.String</code> | Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Azure Key Vault provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWo">credentialsWo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The credentials to use for authentication with Azure Key Vault. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.keyCollection"></a>

```java
public java.lang.String getKeyCollection();
```

- *Type:* java.lang.String

Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#key_collection KeymgmtAzureKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#mount KeymgmtAzureKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the Azure Key Vault provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#name KeymgmtAzureKms#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCredentialsWo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The credentials to use for authentication with Azure Key Vault.

Supplying values for this parameter is optional, as credentials may also be specified as environment variables. Environment variables will take precedence over credentials provided via this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#credentials_wo KeymgmtAzureKms#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWoVersion"></a>

```java
public java.lang.Number getCredentialsWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#credentials_wo_version KeymgmtAzureKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_azure_kms#namespace KeymgmtAzureKms#namespace}

---



