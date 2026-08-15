# `ephemeralVaultGcpkmsEncrypt` Submodule <a name="`ephemeralVaultGcpkmsEncrypt` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsEncrypt <a name="EphemeralVaultGcpkmsEncrypt" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt vault_gcpkms_encrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpkmsEncrypt(Construct Scope, string Id, EphemeralVaultGcpkmsEncryptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig">EphemeralVaultGcpkmsEncryptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig">EphemeralVaultGcpkmsEncryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData">ResetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion">ResetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdditionalAuthenticatedData` <a name="ResetAdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData"></a>

```csharp
private void ResetAdditionalAuthenticatedData()
```

##### `ResetKeyVersion` <a name="ResetKeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion"></a>

```csharp
private void ResetKeyVersion()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpkmsEncrypt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpkmsEncrypt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpkmsEncrypt.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext">Ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned">KeyVersionReturned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput">AdditionalAuthenticatedDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput">KeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion">KeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext"></a>

```csharp
public string Ciphertext { get; }
```

- *Type:* string

---

##### `KeyVersionReturned`<sup>Required</sup> <a name="KeyVersionReturned" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned"></a>

```csharp
public string KeyVersionReturned { get; }
```

- *Type:* string

---

##### `AdditionalAuthenticatedDataInput`<sup>Optional</sup> <a name="AdditionalAuthenticatedDataInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput"></a>

```csharp
public string AdditionalAuthenticatedDataInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyVersionInput`<sup>Optional</sup> <a name="KeyVersionInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput"></a>

```csharp
public double KeyVersionInput { get; }
```

- *Type:* double

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `AdditionalAuthenticatedData`<sup>Required</sup> <a name="AdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData"></a>

```csharp
public string AdditionalAuthenticatedData { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion"></a>

```csharp
public double KeyVersion { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsEncryptConfig <a name="EphemeralVaultGcpkmsEncryptConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpkmsEncryptConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string KeyName,
    string Mount,
    string Plaintext,
    string AdditionalAuthenticatedData = null,
    double KeyVersion = null,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName">KeyName</a></code> | <code>string</code> | Name of the Vault key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext">Plaintext</a></code> | <code>string</code> | Base64-encoded plaintext to encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>string</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion">KeyVersion</a></code> | <code>double</code> | Version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Name of the Vault key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_name EphemeralVaultGcpkmsEncrypt#key_name}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount EphemeralVaultGcpkmsEncrypt#mount}

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Base64-encoded plaintext to encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#plaintext EphemeralVaultGcpkmsEncrypt#plaintext}

---

##### `AdditionalAuthenticatedData`<sup>Optional</sup> <a name="AdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData"></a>

```csharp
public string AdditionalAuthenticatedData { get; set; }
```

- *Type:* string

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#additional_authenticated_data EphemeralVaultGcpkmsEncrypt#additional_authenticated_data}

---

##### `KeyVersion`<sup>Optional</sup> <a name="KeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion"></a>

```csharp
public double KeyVersion { get; set; }
```

- *Type:* double

Version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_version EphemeralVaultGcpkmsEncrypt#key_version}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount_id EphemeralVaultGcpkmsEncrypt#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#namespace EphemeralVaultGcpkmsEncrypt#namespace}

---



