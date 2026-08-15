# `ephemeralVaultGcpkmsEncrypt` Submodule <a name="`ephemeralVaultGcpkmsEncrypt` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsEncrypt <a name="EphemeralVaultGcpkmsEncrypt" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt vault_gcpkms_encrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_encrypt.EphemeralVaultGcpkmsEncrypt;

EphemeralVaultGcpkmsEncrypt.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keyName(java.lang.String)
    .mount(java.lang.String)
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the Vault key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Base64-encoded plaintext to encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | Version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Name of the Vault key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_name EphemeralVaultGcpkmsEncrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount EphemeralVaultGcpkmsEncrypt#mount}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.plaintext"></a>

- *Type:* java.lang.String

Base64-encoded plaintext to encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#plaintext EphemeralVaultGcpkmsEncrypt#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* java.lang.String

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#additional_authenticated_data EphemeralVaultGcpkmsEncrypt#additional_authenticated_data}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.keyVersion"></a>

- *Type:* java.lang.Number

Version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_version EphemeralVaultGcpkmsEncrypt#key_version}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount_id EphemeralVaultGcpkmsEncrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#namespace EphemeralVaultGcpkmsEncrypt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData"></a>

```java
public void resetAdditionalAuthenticatedData()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_encrypt.EphemeralVaultGcpkmsEncrypt;

EphemeralVaultGcpkmsEncrypt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_encrypt.EphemeralVaultGcpkmsEncrypt;

EphemeralVaultGcpkmsEncrypt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_encrypt.EphemeralVaultGcpkmsEncrypt;

EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned">keyVersionReturned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `keyVersionReturned`<sup>Required</sup> <a name="keyVersionReturned" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned"></a>

```java
public java.lang.String getKeyVersionReturned();
```

- *Type:* java.lang.String

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput"></a>

```java
public java.lang.String getAdditionalAuthenticatedDataInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput"></a>

```java
public java.lang.Number getKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsEncryptConfig <a name="EphemeralVaultGcpkmsEncryptConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_encrypt.EphemeralVaultGcpkmsEncryptConfig;

EphemeralVaultGcpkmsEncryptConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keyName(java.lang.String)
    .mount(java.lang.String)
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the Vault key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | Base64-encoded plaintext to encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | Version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Name of the Vault key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_name EphemeralVaultGcpkmsEncrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount EphemeralVaultGcpkmsEncrypt#mount}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

Base64-encoded plaintext to encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#plaintext EphemeralVaultGcpkmsEncrypt#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#additional_authenticated_data EphemeralVaultGcpkmsEncrypt#additional_authenticated_data}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

Version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_version EphemeralVaultGcpkmsEncrypt#key_version}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount_id EphemeralVaultGcpkmsEncrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#namespace EphemeralVaultGcpkmsEncrypt#namespace}

---



