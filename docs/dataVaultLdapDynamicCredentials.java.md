# `dataVaultLdapDynamicCredentials` Submodule <a name="`dataVaultLdapDynamicCredentials` Submodule" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapDynamicCredentials <a name="DataVaultLdapDynamicCredentials" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials vault_ldap_dynamic_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentials;

DataVaultLdapDynamicCredentials.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#mount DataVaultLdapDynamicCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#role_name DataVaultLdapDynamicCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#namespace DataVaultLdapDynamicCredentials#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultLdapDynamicCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentials;

DataVaultLdapDynamicCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentials;

DataVaultLdapDynamicCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentials;

DataVaultLdapDynamicCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentials;

DataVaultLdapDynamicCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultLdapDynamicCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultLdapDynamicCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultLdapDynamicCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultLdapDynamicCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultLdapDynamicCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames">distinguishedNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `distinguishedNames`<sup>Required</sup> <a name="distinguishedNames" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames"></a>

```java
public java.util.List<java.lang.String> getDistinguishedNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapDynamicCredentialsConfig <a name="DataVaultLdapDynamicCredentialsConfig" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_ldap_dynamic_credentials.DataVaultLdapDynamicCredentialsConfig;

DataVaultLdapDynamicCredentialsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#mount DataVaultLdapDynamicCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#role_name DataVaultLdapDynamicCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/ldap_dynamic_credentials#namespace DataVaultLdapDynamicCredentials#namespace}

---



