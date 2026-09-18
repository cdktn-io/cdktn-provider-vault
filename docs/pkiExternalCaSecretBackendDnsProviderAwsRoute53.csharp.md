# `pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53 <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderAwsRoute53(Construct Scope, string Id, PkiExternalCaSecretBackendDnsProviderAwsRoute53Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config">PkiExternalCaSecretBackendDnsProviderAwsRoute53Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn">ResetAssumeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver">ResetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo">ResetSecretAccessKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion">ResetSecretAccessKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetAssumeRoleArn` <a name="ResetAssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn"></a>

```csharp
private void ResetAssumeRoleArn()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId"></a>

```csharp
private void ResetHostedZoneId()
```

##### `ResetNameserver` <a name="ResetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver"></a>

```csharp
private void ResetNameserver()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretAccessKeyWo` <a name="ResetSecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo"></a>

```csharp
private void ResetSecretAccessKeyWo()
```

##### `ResetSecretAccessKeyWoVersion` <a name="ResetSecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion"></a>

```csharp
private void ResetSecretAccessKeyWoVersion()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderAwsRoute53.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput">AssumeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput">NameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput">SecretAccessKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput">SecretAccessKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver">Nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo">SecretAccessKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion">SecretAccessKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AssumeRoleArnInput`<sup>Optional</sup> <a name="AssumeRoleArnInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput"></a>

```csharp
public string AssumeRoleArnInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput"></a>

```csharp
public string NameserverInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyWoInput`<sup>Optional</sup> <a name="SecretAccessKeyWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput"></a>

```csharp
public string SecretAccessKeyWoInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyWoVersionInput`<sup>Optional</sup> <a name="SecretAccessKeyWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput"></a>

```csharp
public double SecretAccessKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AssumeRoleArn`<sup>Required</sup> <a name="AssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn"></a>

```csharp
public string AssumeRoleArn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver"></a>

```csharp
public string Nameserver { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### ~~`SecretAccessKeyWo`~~<sup>Required</sup> <a name="SecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string SecretAccessKeyWo { get; }
```

- *Type:* string

---

##### `SecretAccessKeyWoVersion`<sup>Required</sup> <a name="SecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion"></a>

```csharp
public double SecretAccessKeyWoVersion { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53Config <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderAwsRoute53Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Identifiers,
    string Mount,
    string Name,
    string AccessKeyId = null,
    string AssumeRoleArn = null,
    string ExternalId = null,
    string HostedZoneId = null,
    string Nameserver = null,
    string Namespace = null,
    string Region = null,
    string SecretAccessKeyWo = null,
    double SecretAccessKeyWoVersion = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers">Identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name">Name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn">AssumeRoleArn</a></code> | <code>string</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId">ExternalId</a></code> | <code>string</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver">Nameserver</a></code> | <code>string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region">Region</a></code> | <code>string</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo">SecretAccessKeyWo</a></code> | <code>string</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion">SecretAccessKeyWoVersion</a></code> | <code>double</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl">Ttl</a></code> | <code>double</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `AssumeRoleArn`<sup>Optional</sup> <a name="AssumeRoleArn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn"></a>

```csharp
public string AssumeRoleArn { get; set; }
```

- *Type:* string

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `Nameserver`<sup>Optional</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver"></a>

```csharp
public string Nameserver { get; set; }
```

- *Type:* string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `SecretAccessKeyWo`<sup>Optional</sup> <a name="SecretAccessKeyWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo"></a>

```csharp
public string SecretAccessKeyWo { get; set; }
```

- *Type:* string

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `SecretAccessKeyWoVersion`<sup>Optional</sup> <a name="SecretAccessKeyWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion"></a>

```csharp
public double SecretAccessKeyWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---



