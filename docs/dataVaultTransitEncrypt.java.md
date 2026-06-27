# `dataVaultTransitEncrypt` Submodule <a name="`dataVaultTransitEncrypt` Submodule" id="@cdktn/provider-vault.dataVaultTransitEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitEncrypt <a name="DataVaultTransitEncrypt" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt vault_transit_encrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncrypt;

DataVaultTransitEncrypt.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .key(java.lang.String)
    .plaintext(java.lang.String)
//  .context(java.lang.String)
//  .id(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Name of the encryption key to use. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Map of strings read from Vault. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.plaintext"></a>

- *Type:* java.lang.String

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.keyVersion"></a>

- *Type:* java.lang.Number

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetContext` <a name="resetContext" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetContext"></a>

```java
public void resetContext()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetId"></a>

```java
public void resetId()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransitEncrypt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncrypt;

DataVaultTransitEncrypt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncrypt;

DataVaultTransitEncrypt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncrypt;

DataVaultTransitEncrypt.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncrypt;

DataVaultTransitEncrypt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransitEncrypt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultTransitEncrypt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransitEncrypt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransitEncrypt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransitEncrypt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersionInput"></a>

```java
public java.lang.Number getKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncrypt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitEncryptConfig <a name="DataVaultTransitEncryptConfig" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_transit_encrypt.DataVaultTransitEncryptConfig;

DataVaultTransitEncryptConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .key(java.lang.String)
    .plaintext(java.lang.String)
//  .context(java.lang.String)
//  .id(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key">key</a></code> | <code>java.lang.String</code> | Name of the encryption key to use. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Map of strings read from Vault. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context">context</a></code> | <code>java.lang.String</code> | Specifies the context for key derivation. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#backend DataVaultTransitEncrypt#backend}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the encryption key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#key DataVaultTransitEncrypt#key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Map of strings read from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#plaintext DataVaultTransitEncrypt#plaintext}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Specifies the context for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#context DataVaultTransitEncrypt#context}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#id DataVaultTransitEncrypt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

The version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#key_version DataVaultTransitEncrypt#key_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransitEncrypt.DataVaultTransitEncryptConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/transit_encrypt#namespace DataVaultTransitEncrypt#namespace}

---



