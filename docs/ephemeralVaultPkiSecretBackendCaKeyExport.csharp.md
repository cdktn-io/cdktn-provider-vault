# `ephemeralVaultPkiSecretBackendCaKeyExport` Submodule <a name="`ephemeralVaultPkiSecretBackendCaKeyExport` Submodule" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExport <a name="EphemeralVaultPkiSecretBackendCaKeyExport" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultPkiSecretBackendCaKeyExport(Construct Scope, string Id, EphemeralVaultPkiSecretBackendCaKeyExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultPkiSecretBackendCaKeyExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultPkiSecretBackendCaKeyExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultPkiSecretBackendCaKeyExport.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt">ExportedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey">WrappedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput">CaKeyUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid">CaKeyUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExportedAt`<sup>Required</sup> <a name="ExportedAt" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt"></a>

```csharp
public string ExportedAt { get; }
```

- *Type:* string

---

##### `ExportKeyHmac`<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac"></a>

```csharp
public string ExportKeyHmac { get; }
```

- *Type:* string

---

##### `WrappedKey`<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey"></a>

```csharp
public string WrappedKey { get; }
```

- *Type:* string

---

##### `CaKeyUuidInput`<sup>Optional</sup> <a name="CaKeyUuidInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput"></a>

```csharp
public string CaKeyUuidInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `CaKeyUuid`<sup>Required</sup> <a name="CaKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid"></a>

```csharp
public string CaKeyUuid { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExportConfig <a name="EphemeralVaultPkiSecretBackendCaKeyExportConfig" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultPkiSecretBackendCaKeyExportConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string CaKeyUuid,
    string Mount,
    string PublicKey,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid">CaKeyUuid</a></code> | <code>string</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CaKeyUuid`<sup>Required</sup> <a name="CaKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid"></a>

```csharp
public string CaKeyUuid { get; set; }
```

- *Type:* string

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---



