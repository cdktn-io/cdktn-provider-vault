# `ephemeralVaultAwsAccessCredentials` Submodule <a name="`ephemeralVaultAwsAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAwsAccessCredentials <a name="EphemeralVaultAwsAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials vault_aws_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultAwsAccessCredentials(Construct Scope, string Id, EphemeralVaultAwsAccessCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAwsAccessCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAwsAccessCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultAwsAccessCredentials.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken">SecurityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SecurityToken`<sup>Required</sup> <a name="SecurityToken" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken"></a>

```csharp
public string SecurityToken { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAwsAccessCredentialsConfig <a name="EphemeralVaultAwsAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultAwsAccessCredentialsConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string Role,
    string MountId = null,
    string Namespace = null,
    string Region = null,
    string RoleArn = null,
    string Ttl = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the AWS secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role">Role</a></code> | <code>string</code> | AWS Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region">Region</a></code> | <code>string</code> | Region the read credentials belong to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN to use if multiple are available in the role. Required if the role has multiple ARNs. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl">Ttl</a></code> | <code>string</code> | User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type">Type</a></code> | <code>string</code> | Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the AWS secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#mount EphemeralVaultAwsAccessCredentials#mount}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

AWS Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#role EphemeralVaultAwsAccessCredentials#role}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#mount_id EphemeralVaultAwsAccessCredentials#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#namespace EphemeralVaultAwsAccessCredentials#namespace}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region the read credentials belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#region EphemeralVaultAwsAccessCredentials#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN to use if multiple are available in the role. Required if the role has multiple ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#role_arn EphemeralVaultAwsAccessCredentials#role_arn}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#ttl EphemeralVaultAwsAccessCredentials#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/aws_access_credentials#type EphemeralVaultAwsAccessCredentials#type}

---



