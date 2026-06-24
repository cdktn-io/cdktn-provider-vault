# `dataVaultLdapStaticCredentials` Submodule <a name="`dataVaultLdapStaticCredentials` Submodule" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapStaticCredentials <a name="DataVaultLdapStaticCredentials" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials vault_ldap_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultLdapStaticCredentials(Construct Scope, string Id, DataVaultLdapStaticCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig">DataVaultLdapStaticCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig">DataVaultLdapStaticCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultLdapStaticCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultLdapStaticCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultLdapStaticCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultLdapStaticCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultLdapStaticCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultLdapStaticCredentials resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultLdapStaticCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultLdapStaticCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultLdapStaticCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn">Dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword">LastPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation">LastVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn"></a>

```csharp
public string Dn { get; }
```

- *Type:* string

---

##### `LastPassword`<sup>Required</sup> <a name="LastPassword" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword"></a>

```csharp
public string LastPassword { get; }
```

- *Type:* string

---

##### `LastVaultRotation`<sup>Required</sup> <a name="LastVaultRotation" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation"></a>

```csharp
public string LastVaultRotation { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapStaticCredentialsConfig <a name="DataVaultLdapStaticCredentialsConfig" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultLdapStaticCredentialsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string RoleName,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount">Mount</a></code> | <code>string</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---



